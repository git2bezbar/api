import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import User from './user.js'

export default class BasicModel extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare created_by: User

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @column()
  declare updated_by: User
}
