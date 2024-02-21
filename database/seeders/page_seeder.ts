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
        isActive: true,
        uuid: randomUUID(),
        websiteId: 1,
      },
      {
        type: 'about',
        order: 2,
        description: 'My about page',
        isActive: true,
        uuid: randomUUID(),
        websiteId: 1,
      },
      {
        type: 'menu',
        order: 3,
        description: 'My menu page',
        isActive: true,
        uuid: randomUUID(),
        websiteId: 1,
      },
      {
        type: 'contact',
        order: 4,
        description: 'My contact page',
        isActive: true,
        uuid: randomUUID(),
        websiteId: 1,
      },
      {
        type: 'legal',
        order: 5,
        description: 'My legal page',
        isActive: true,
        uuid: randomUUID(),
        websiteId: 1,
      },
    ])
  }
}
