import Attachement from '#models/attachement'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Attachement.createMany([
      {
        filename: 'image1.jpg',
        path: '~/images/image1.jpg',
        description: 'Image 1',
        type: 'media',
        website_id: 1,
      },
      {
        filename: 'image2.jpg',
        path: '~/images/image2.jpg',
        description: 'Image 2',
        type: 'media',
        website_id: 1,
      },
      {
        filename: 'profile.jpg',
        path: '~/images/profile.jpg',
        description: 'Profile',
        type: 'avatar',
        website_id: 1,
      },
    ])
  }
}
