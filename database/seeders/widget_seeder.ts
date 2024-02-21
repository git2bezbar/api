import Widget from '#models/widget'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Widget.createMany([
      {
        name: 'Viewport',
        order: 1,
        content: {
          title: 'Les Dunes',
          subtitle: 'Le meilleur du maghreb',
          hasButton: true,
          buttonContent: 'Cliquez ici',
          buttonColor: 'primary',
          buttonLink: 'contact',
        },
        pageId: 1,
      },
      {
        name: 'Texte + Image',
        order: 2,
        content: {
          imagePosition: 'left',
          title: 'Les Dunes',
          subtitle: 'Le meilleur du maghreb',
          hasButton: false,
          image: 3,
        },
        pageId: 1,
      },
      {
        name: 'Texte',
        order: 3,
        content: {
          title: 'Les Dunes',
          subtitle: 'Le meilleur du maghreb',
          hasButton: false,
        },
        pageId: 1,
      },
    ])
  }
}
