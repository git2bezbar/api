import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Website from './website.js'

export default class Attachement extends BasicModel {
  @column()
  declare filename: string

  @column()
  declare path: string

  @column()
  declare description: string

  @column()
  declare type: string

  @column()
  declare website_id: number

  @belongsTo(() => Website)
  declare category: BelongsTo<typeof Website>
}
