import SocialLink from '#models/social_link'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await SocialLink.createMany([
      {
        platform: 'facebook',
        url: 'facebook.com/les-dunes',
        is_active: true,
        websiteId: 2,
      },
      {
        platform: 'twitter',
        url: 'twitter.com/les-dunes',
        is_active: false,
        websiteId: 2,
      },
      {
        platform: 'instagram',
        url: 'instagram.com/les-dunes',
        is_active: true,
        websiteId: 2,
      },
      {
        platform: 'thefork',
        url: 'thefork.fr/les-dunes',
        is_active: false,
        websiteId: 2,
      },
      {
        platform: 'tripadvisor',
        url: 'tripadvisor.com/les-dunes',
        is_active: false,
        websiteId: 2,
      },
    ])
  }
}
