import { column } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'

export default class Attachment extends BasicModel {
  @column()
  declare filename: string

  @column()
  declare path: string

  @column()
  declare description: string

  @column()
  declare type: string
}
