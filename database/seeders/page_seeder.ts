import Page from '#models/page'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { randomUUID } from 'node:crypto'

export default class extends BaseSeeder {
  async run() {
    await Page.createMany([
      {
        type: 'home',
        order: 1,
        description: 'My home page',
        is_active: true,
        uuid: randomUUID(),
        website_id: 1,
      },
      {
        type: 'about',
        order: 2,
        description: 'My about page',
        is_active: true,
        uuid: randomUUID(),
        website_id: 1,
      },
      {
        type: 'menu',
        order: 3,
        description: 'My menu page',
        is_active: true,
        uuid: randomUUID(),
        website_id: 1,
      },
      {
        type: 'contact',
        order: 4,
        description: 'My contact page',
        is_active: true,
        uuid: randomUUID(),
        website_id: 1,
      },
      {
        type: 'legal',
        order: 5,
        description: 'My legal page',
        is_active: true,
        uuid: randomUUID(),
        website_id: 1,
      },
    ])
  }
}
