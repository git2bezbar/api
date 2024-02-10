import TimeSlot from '#models/time_slot'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await TimeSlot.createMany([
      {
        day_of_week: 'Lundi',
        opening_time: '2002-02-21T08:30:00.000Z',
        closing_time: '2002-02-21T12:30:00.000Z',
        website_id: 1,
      },
      {
        day_of_week: 'Lundi',
        opening_time: '2002-02-21T14:30:00.000Z',
        closing_time: '2002-02-21T17:30:00.000Z',
        website_id: 1,
      },
      {
        day_of_week: 'Mardi',
        opening_time: '2002-02-21T08:30:00.000Z',
        closing_time: '2002-02-21T12:30:00.000Z',
        website_id: 1,
      },
      {
        day_of_week: 'Mardi',
        opening_time: '2002-02-21T14:30:00.000Z',
        closing_time: '2002-02-21T17:30:00.000Z',
        website_id: 1,
      },
      {
        day_of_week: 'Mercredi',
        opening_time: '2002-02-21T08:30:00.000Z',
        closing_time: '2002-02-21T12:30:00.000Z',
        website_id: 1,
      },
      {
        day_of_week: 'Mercredi',
        opening_time: '2002-02-21T14:30:00.000Z',
        closing_time: '2002-02-21T17:30:00.000Z',
        website_id: 1,
      },
    ])
  }
}
