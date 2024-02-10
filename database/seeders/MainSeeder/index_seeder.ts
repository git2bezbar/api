import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async runSeeder(Seeder: { default: typeof BaseSeeder }) {
    await new Seeder.default(this.client).run()
  }

  async run() {
    await this.runSeeder(await import('../website_seeder.js'))
    await this.runSeeder(await import('../user_seeder.js'))
    await this.runSeeder(await import('../category_seeder.js'))
    await this.runSeeder(await import('../product_seeder.js'))
    await this.runSeeder(await import('../social_link_seeder.js'))
    await this.runSeeder(await import('../time_slot_seeder.js'))
    await this.runSeeder(await import('../attachement_seeder.js'))
    await this.runSeeder(await import('../page_seeder.js'))
    await this.runSeeder(await import('../widget_seeder.js'))
  }
}
