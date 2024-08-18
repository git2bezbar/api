import Widget from '#models/widget'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Widget.createMany([
      {
        name: 'Texte',
        order: 1,
        content: {
          title: 'Les Dunes',
          subtitle: 'Le meilleur du maghreb',
          hasButton: true,
          buttonContent: 'Voir la carte',
          buttonLink: 'menu',
        },
        pageId: 1,
      },
    ])
  }
}
