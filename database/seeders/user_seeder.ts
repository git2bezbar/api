import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { randomUUID } from 'node:crypto'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        username: 'ademDuran',
        email: 'adem@forkee.fr',
        password: 'ademduran',
        firstname: 'Adem',
        lastname: 'Duran',
        uuid: randomUUID(),
      },
      {
        username: 'leonardPaillet',
        email: 'leonard@forkee.fr',
        password: 'leonardPaillet',
        firstname: 'Léonard',
        lastname: 'Paillet',
        uuid: randomUUID(),
      },
      {
        username: 'romainVache',
        email: 'romain@forkee.fr',
        password: 'romainVache',
        firstname: 'Romain',
        lastname: 'Vaché',
        uuid: randomUUID(),
      },
      {
        username: 'julienAuger',
        email: 'julien@forkee.fr',
        password: 'julienAuger',
        firstname: 'Julien',
        lastname: 'Auger',
        uuid: randomUUID(),
      },
    ])
  }
}
