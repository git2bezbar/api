import TimeSlot from '#models/time_slot'
import Website from '#models/website'
import type { HttpContext } from '@adonisjs/core/http'

export default class GeneralSettingsController {
  async show({ params }: HttpContext) {
    const { uuid } = params
    const {
      websiteTitle,
      websiteHeadline,
      websiteLogo,
      websiteFavicon,
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
      websiteLogo,
      websiteFavicon,
      street,
      postCode,
      city,
      timeSlots: newTimeSlots,
    }

    return generalSettings
  }

  async update({ request, params }: HttpContext) {
    const { uuid } = params
    const {
      websiteTitle: updatedWebsiteTitle,
      websiteHeadline: updatedWebsiteHeadline,
      websiteLogo: updatedWebsiteLogo,
      websiteFavicon: updatedWebsiteFavicon,
      street: updatedStreet,
      postCode: updatedPostCode,
      city: updatedCity,
      timeSlots: updatedTimeSlots,
    } = request.all()
    const { id } = await Website.query().where('uuid', uuid).firstOrFail()
    const updatedGeneralSettings = await Website.query().where('uuid', uuid).update({
      websiteTitle: updatedWebsiteTitle,
      websiteHeadline: updatedWebsiteHeadline,
      websiteLogo: updatedWebsiteLogo,
      websiteFavicon: updatedWebsiteFavicon,
      street: updatedStreet,
      postCode: updatedPostCode,
      city: updatedCity,
    })

    if (updatedTimeSlots.length) {
      updatedTimeSlots.map(async (timeSlot: TimeSlot) => {
        await TimeSlot.query()
          .where('websiteId', id)
          .where('dayOfWeek', timeSlot.dayOfWeek)
          .where('slotNumber', timeSlot.slotNumber)
          .update({
            openingTime: timeSlot.openingTime,
            closingTime: timeSlot.closingTime,
          })
      })
    }
    return updatedGeneralSettings
  }
}
