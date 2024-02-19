import SocialLink from '#models/social_link'
import Website from '#models/website'
import { HttpContext } from '@adonisjs/core/http'

export default class ContactSettingsController {
  async show({ params }: HttpContext) {
    const { uuid } = params
    const website = await Website.query().where('uuid', uuid).preload('socialLinks').firstOrFail()
    const contactSettings = {
      email: website.email,
      phoneNumber: website.phoneNumber,
      socialLinks: website.socialLinks,
    }

    return contactSettings
  }

  async update({ request, params }: HttpContext) {
    const { uuid } = params
    const {
      email: updatedEmail,
      phoneNumber: updatedPhoneNumber,
      socialLinks: updatedSocialLinks,
    } = request.all()
    const { id } = await Website.query().where('uuid', uuid).firstOrFail()
    const updatedContactSettings = await Website.query()
      .where('uuid', uuid)
      .update({ email: updatedEmail, phoneNumber: updatedPhoneNumber })

    if (updatedSocialLinks.length) {
      updatedSocialLinks.map(async (socialLink: SocialLink) => {
        await SocialLink.query()
          .where('websiteId', id)
          .where('platform', socialLink.platform)
          .update({
            url: socialLink.url,
            isActive: socialLink.is_active,
          })
      })
    }
    return updatedContactSettings
  }
}
