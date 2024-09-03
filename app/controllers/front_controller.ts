import Website from '#models/website'
import type { HttpContext } from '@adonisjs/core/http'
import Page from '#models/page'
import SocialLink from '#models/social_link'
import TimeSlot from '#models/time_slot'
import Product from '#models/product'

interface RenderMenu {
  type: Page['type']
  order: Page['order']
  isActive: Page['isActive']
}

export default class FrontController {
  async menu({ params }: HttpContext) {
    const { uuid } = params
    const { pages } = await Website.query().where('uuid', uuid).preload('pages').firstOrFail()
    const menuPages: RenderMenu[] = []
    pages.map((page: Page) => {
      const { type, order, isActive } = page
      menuPages.push({
        type,
        order,
        isActive,
      })
    })
    return menuPages
  }

  async contactSettings({ params }: HttpContext) {
    const { uuid } = params
    const website = await Website.query().where('uuid', uuid).preload('socialLinks').firstOrFail()
    const socialLinks = website.socialLinks.map((socialLink: SocialLink) => {
      return {
        platform: socialLink.platform,
        url: socialLink.url,
        is_active: socialLink.is_active,
      }
    })
    const contactSettings = {
      email: website.email,
      phoneNumber: website.phoneNumber,
      socialLinks: socialLinks,
    }

    return contactSettings
  }

  async generalSettings({ params }: HttpContext) {
    const { uuid } = params
    const {
      websiteTitle,
      websiteHeadline,
      street,
      postCode,
      city,
      timeSlots,
    } = await Website.query().where('uuid', uuid).preload('timeSlots').firstOrFail()
    const newTimeSlots = timeSlots.map((timeSlot: TimeSlot) => {
      return {
        dayOfWeek: timeSlot.dayOfWeek,
        slotNumber: timeSlot.slotNumber,
        openingTime: timeSlot.openingTime,
        closingTime: timeSlot.closingTime,
        isActive: timeSlot.isActive,
      }
    })
    const generalSettings = {
      websiteTitle,
      websiteHeadline,
      street,
      postCode,
      city,
      timeSlots: newTimeSlots,
    }

    return generalSettings
  }

  async customization({ params }: HttpContext) {
    const { uuid } = params
    const {
      primaryColor,
      secondaryColor,
      textFont,
    } = await Website.query().where('uuid', uuid).preload('timeSlots').firstOrFail()
    const customization = {
      primaryColor,
      secondaryColor,
      textFont,
    }

    return customization
  }

  async products({ params }: HttpContext) {
    const { uuid } = params
    const { id: websiteId } = await Website.query().where('uuid', uuid).firstOrFail()
    const products = await Product.query().where('website_id', websiteId)

    return JSON.parse(products[0].content)
  }

  async page({ params }: HttpContext) {
    const { uuid, pageType } = params
    const { id: websiteId } = await Website.query().where('uuid', uuid).firstOrFail()
    const page = await Page.query()
      .where('website_id', websiteId)
      .where('type', pageType)
      .preload('widgets').firstOrFail()
    page.widgets.map((widget) => {
      widget.content = JSON.parse(widget.content as string)
    })
    page.widgets.sort((a, b) => a.order - b.order)

    return {
      type: page.type,
      description: page.description,
      isActive: page.isActive,
      widgets: page.widgets.map((widget) => {
        return {
          name: widget.name,
          order: widget.order,
          content: widget.content,
        }
      })
    }
  }
}
