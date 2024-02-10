import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Category.createMany([
      { name: 'Pâtes' },
      { name: 'Grillades' },
      { name: 'Salades' },
      { name: 'Boissons' },
      { name: 'Desserts' },
      { name: 'Café et thé' },
    ])
  }
}
