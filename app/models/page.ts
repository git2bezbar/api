import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'
import { randomUUID } from 'node:crypto'
import Widget from './widget.js'
import Website from './website.js'

export default class Page extends BasicModel {
  @column()
  declare type: string

  @column()
  declare order: number

  @column()
  declare description: string

  @column()
  declare is_active: boolean

  @column({ prepare: (value: string) => (value ? value : randomUUID()) })
  declare uuid: string

  @hasMany(() => Widget)
  declare widgets: HasMany<typeof Widget>

  @column()
  declare website_id: number

  @belongsTo(() => Website)
  declare category: BelongsTo<typeof Website>
}
