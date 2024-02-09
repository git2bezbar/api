import { column, hasMany } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'
import { randomUUID } from 'node:crypto'
import Widgets from './widgets.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Pages extends BasicModel {
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

  @hasMany(() => Widgets)
  declare category: HasMany<typeof Widgets>
}
