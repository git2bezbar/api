import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Website from './website.js'

export default class TimeSlot extends BasicModel {
  @column()
  declare opening_time: string

  @column()
  declare closing_time: string

  @column()
  declare day_of_week: string

  @column()
  declare website_id: number

  @belongsTo(() => Website)
  declare category: BelongsTo<typeof Website>
}
