import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, hasMany } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

import BasicModel from './base.js'
import Websites from './websites.js'

export default class Users extends BasicModel {
  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column()
  declare firstname: string

  @column()
  declare lastname: string

  @column({ prepare: (value: string) => (value ? value : randomUUID()) })
  declare uuid: string

  @column({ prepare: (value: string) => (value ? value : randomUUID()) })
  declare reset_password_token: string

  @hasMany(() => Websites)
  declare websites: HasMany<typeof Websites>
}
