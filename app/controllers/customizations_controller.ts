import Website from '#models/website'
import type { HttpContext } from '@adonisjs/core/http'

export default class CustomizationsController {
  async show({ params }: HttpContext) {
    const { uuid } = params
    const {
      headerLayout,
      theme,
      primaryColor,
      secondaryColor,
      titleFont,
      textFont,
      buttonFont,
      footerLayout,
    } = await Website.query().where('uuid', uuid).preload('timeSlots').firstOrFail()
    const customization = {
      headerLayout,
      theme,
      primaryColor,
      secondaryColor,
      titleFont,
      textFont,
      buttonFont,
      footerLayout,
    }

    return customization
  }

  async update({ request, params }: HttpContext) {
    const { uuid } = params
    const {
      headerLayout: updatedHeaderLayout,
      theme: updatedTheme,
      primaryColor: updatedPrimaryColor,
      secondaryColor: updatedSecondaryColor,
      titleFont: updatedTitleFont,
      textFont: updatedTextFont,
      buttonFont: updatedButtonFont,
      footerLayout: updatedFooterLayout,
    } = request.all()
    const updatedCustomization = await Website.query().where('uuid', uuid).update({
      headerLayout: updatedHeaderLayout,
      theme: updatedTheme,
      primaryColor: updatedPrimaryColor,
      secondaryColor: updatedSecondaryColor,
      titleFont: updatedTitleFont,
      textFont: updatedTextFont,
      buttonFont: updatedButtonFont,
      footerLayout: updatedFooterLayout,
    })

    return updatedCustomization
  }
}
