import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Website from './website.js'

export default class TimeSlot extends BasicModel {
  @column()
  declare openingTime: string

  @column()
  declare closingTime: string

  @column()
  declare dayOfWeek: string

  @column()
  declare slotNumber: number

  @column()
  declare websiteId: number

  @column()
  declare isActive: boolean

  @belongsTo(() => Website)
  declare website: BelongsTo<typeof Website>
}
