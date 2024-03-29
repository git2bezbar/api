import TimeSlot from '#models/time_slot'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await TimeSlot.createMany([
      {
        dayOfWeek: 'Lundi',
        openingTime: '08:30',
        closingTime: '12:30',
        websiteId: 1,
        slotNumber: 1,
        isActive: true,
      },
      {
        dayOfWeek: 'Lundi',
        openingTime: '14:30',
        closingTime: '17:30',
        websiteId: 1,
        slotNumber: 2,
        isActive: true,
      },
      {
        dayOfWeek: 'Mardi',
        openingTime: '08:30',
        closingTime: '12:30',
        websiteId: 1,
        slotNumber: 1,
        isActive: true,
      },
      {
        dayOfWeek: 'Mardi',
        openingTime: '14:30',
        closingTime: '17:30',
        websiteId: 1,
        slotNumber: 2,
        isActive: true,
      },
      {
        dayOfWeek: 'Mercredi',
        openingTime: '08:30',
        closingTime: '12:30',
        websiteId: 1,
        slotNumber: 1,
        isActive: true,
      },
      {
        dayOfWeek: 'Mercredi',
        openingTime: '14:30',
        closingTime: '17:30',
        websiteId: 1,
        slotNumber: 2,
        isActive: true,
      },
      {
        dayOfWeek: 'Jeudi',
        openingTime: '08:30',
        closingTime: '12:30',
        websiteId: 1,
        slotNumber: 1,
        isActive: true,
      },
      {
        dayOfWeek: 'Jeudi',
        openingTime: '14:30',
        closingTime: '17:30',
        websiteId: 1,
        slotNumber: 2,
        isActive: true,
      },
      {
        dayOfWeek: 'Vendredi',
        openingTime: '08:30',
        closingTime: '12:30',
        websiteId: 1,
        slotNumber: 1,
        isActive: true,
      },
      {
        dayOfWeek: 'Vendredi',
        openingTime: '14:30',
        closingTime: '17:30',
        websiteId: 1,
        slotNumber: 2,
        isActive: true,
      },
      {
        dayOfWeek: 'Samedi',
        openingTime: '08:30',
        closingTime: '12:30',
        websiteId: 1,
        slotNumber: 1,
        isActive: true,
      },
      {
        dayOfWeek: 'Samedi',
        openingTime: '14:30',
        closingTime: '17:30',
        websiteId: 1,
        slotNumber: 2,
        isActive: true,
      },
      {
        dayOfWeek: 'Dimanche',
        openingTime: '08:30',
        closingTime: '12:30',
        websiteId: 1,
        slotNumber: 1,
        isActive: false,
      },
      {
        dayOfWeek: 'Dimanche',
        openingTime: '14:30',
        closingTime: '17:30',
        websiteId: 1,
        slotNumber: 2,
        isActive: false,
      },
    ])
  }
}
