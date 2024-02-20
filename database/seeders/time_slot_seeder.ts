import TimeSlot from '#models/time_slot'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await TimeSlot.createMany([
      {
        dayOfWeek: 'Lundi',
        openingTime: '2002-02-21T08:30:00.000Z',
        closingTime: '2002-02-21T12:30:00.000Z',
        websiteId: 1,
        slotNumber: 1,
      },
      {
        dayOfWeek: 'Lundi',
        openingTime: '2002-02-21T14:30:00.000Z',
        closingTime: '2002-02-21T17:30:00.000Z',
        websiteId: 1,
        slotNumber: 2,
      },
      {
        dayOfWeek: 'Mardi',
        openingTime: '2002-02-21T08:30:00.000Z',
        closingTime: '2002-02-21T12:30:00.000Z',
        websiteId: 1,
        slotNumber: 1,
      },
      {
        dayOfWeek: 'Mardi',
        openingTime: '2002-02-21T14:30:00.000Z',
        closingTime: '2002-02-21T17:30:00.000Z',
        websiteId: 1,
        slotNumber: 2,
      },
      {
        dayOfWeek: 'Mercredi',
        openingTime: '2002-02-21T08:30:00.000Z',
        closingTime: '2002-02-21T12:30:00.000Z',
        websiteId: 1,
        slotNumber: 1,
      },
      {
        dayOfWeek: 'Mercredi',
        openingTime: '2002-02-21T14:30:00.000Z',
        closingTime: '2002-02-21T17:30:00.000Z',
        websiteId: 1,
        slotNumber: 2,
      },
    ])
  }
}
