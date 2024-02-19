import Website from '#models/website'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { randomUUID } from 'node:crypto'

export default class extends BaseSeeder {
  async run() {
    await Website.create({
      website_title: 'Les Dunes',
      website_headline: 'Les saveurs du Maghreb',
      street: '42 Boulevard Charles Stoessel',
      post_code: '68200',
      city: 'Mulhouse',
      uuid: randomUUID(),
    })
  }
}
