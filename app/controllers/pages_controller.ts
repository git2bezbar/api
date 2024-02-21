import Page from '#models/page'
import Website from '#models/website'
import Widget from '#models/widget'
import type { HttpContext } from '@adonisjs/core/http'

export default class PagesController {
  async index({ params }: HttpContext) {
    const { uuid } = params
    const { pages } = await Website.query().where('uuid', uuid).preload('pages').firstOrFail()

    return pages
  }

  async show({ params }: HttpContext) {
    const { pageUuid } = params
    const page = await Page.query().where('uuid', pageUuid).preload('widgets').firstOrFail()
    page.widgets.map((widget) => {
      widget.content = JSON.parse(widget.content as string)
    })

    return page
  }

  async update({ params, request }: HttpContext) {
    const { pageUuid } = params
    const { description: updatedDescription, widgets: updatedWidgets } = request.all()
    const page = await Page.query().where('uuid', pageUuid).preload('widgets').firstOrFail()
    const updatedPage = await Page.query().where('uuid', pageUuid).update({
      description: updatedDescription,
    })

    if (updatedWidgets.length) {
      updatedWidgets.map(async (widget: Widget) => {
        await page
          .related('widgets')
          .query()
          .where('id', widget.id)
          .update({
            content: JSON.stringify(widget.content),
          })
      })
    }
    return updatedPage
  }
}
