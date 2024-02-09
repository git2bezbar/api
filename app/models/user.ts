import type { HasMany } from '@adonisjs/lucid/types/relations'
import { beforeSave, column, hasMany } from '@adonisjs/lucid/orm'
import { randomUUID } from 'node:crypto'

import BasicModel from './base.js'
import Websites from './website.js'
import hash from '@adonisjs/core/services/hash'

export default class User extends BasicModel {
  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare password: string

  @beforeSave()
  static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }

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
