import Website from '#models/website'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Website.create({
      websiteTitle: 'Les Dunes',
      websiteHeadline: 'Les saveurs du Maghreb',
      street: '42 Boulevard Charles Stoessel',
      postCode: '68200',
      city: 'Mulhouse',
      uuid: '1bcc2d88-43e2-47f9-a009-d7a2418604df',
    })
  }
}
