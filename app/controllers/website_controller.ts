import Page from '#models/page'
import Website from '#models/website'
import Widget from '#models/widget'
import { HttpContext } from '@adonisjs/core/http'
import { randomUUID } from 'node:crypto'

export default class WebsiteController {
  async create({ request, auth }: HttpContext) {
    const { websiteTitle, email } = request.all()
    const { uuid, id } = await Website.create({
      websiteTitle,
      email,
      uuid: randomUUID(),
      headerLayout: '1',
      theme: '1',
      primaryColor: '#6624FF',
      secondaryColor: '#FF9900',
      titleFont: 'dm-sans',
      textFont: 'dm-sans',
      buttonFont: 'dm-sans',
      footerLayout: '1',
    })

    const newWebsite = await Website.findBy('uuid', uuid)

    if (newWebsite && auth.user) {
      await newWebsite.related('users').attach([auth.user.id])
    }

    ;['home', 'about', 'menu', 'contact', 'legal'].map(async (type, index) => {
      const { id: pageId } = await Page.create({
        type,
        order: index + 1,
        description: '',
        isActive: true,
        uuid: randomUUID(),
        websiteId: id,
      })

      await Widget.createMany([
        {
          name: 'Texte + Image',
          order: 1,
          content: {
            title: '',
            subtitle: '',
            image: 3,
            imagePosition: 'left',
          },
          pageId,
        },
        {
          name: 'Texte',
          order: 2,
          content: {
            title: '',
            subtitle: '',
          },
          pageId,
        },
      ])
    })

    return { uuid }
  }

  async getWebsite({ auth }: HttpContext) {
    const user = await auth.user
    if (!user) {
      return null
    }

    const websiteUUID = await user.related('websites').query().select('uuid').first()

    return websiteUUID
  }

  async getWebsites({ auth }: HttpContext) {
    const user = await auth.user
    if (!user) {
      return null
    }

    return await user.related('websites').query().select('uuid', 'websiteTitle')
  }
}
