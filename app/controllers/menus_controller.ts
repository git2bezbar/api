import Website from '#models/website'
import type { HttpContext } from '@adonisjs/core/http'
import Page from '#models/page'

export interface MenuPageProps {
  type: Page['type']
  uuid: Page['uuid']
  order: Page['order']
  isActive: Page['isActive']
}

export default class MenusController {
  async index({ params }: HttpContext) {
    const { uuid } = params
    const { pages } = await Website.query().where('uuid', uuid).preload('pages').firstOrFail()
    const menuPages: MenuPageProps[] = []
    pages.map((page: Page) => {
      if (page.type === 'legal') return

      const { type, uuid: pageUuid, order, isActive } = page
      menuPages.push({
        type,
        uuid: pageUuid,
        order,
        isActive,
      })
    })
    return menuPages
  }

  async update({ request, response }: HttpContext) {
    const pages = Object.values(request.all())
    pages.map(async (page: MenuPageProps) => {
      await Page.query().where('uuid', page.uuid).update({
        order: page.order,
        isActive: page.isActive,
      })
    })

    return response.status(200).send('Menu updated successfully')
  }
}
