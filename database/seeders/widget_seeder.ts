import Widget from '#models/widget'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Widget.createMany([
      {
        name: 'Texte + Image',
        order: 2,
        content: {
          title: 'Les Dunes',
          subtitle: 'Le meilleur du maghreb',
          image: 3,
          imagePosition: 'left',
        },
        pageId: 1,
      },
      {
        name: 'Texte',
        order: 3,
        content: {
          title: 'Les Dunes',
          subtitle: 'Le meilleur du maghreb',
        },
        pageId: 1,
      },
    ])
  }
}
