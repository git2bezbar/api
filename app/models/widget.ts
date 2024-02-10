import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Page from './page.js'

export default class Widget extends BasicModel {
  @column()
  declare name: string

  @column()
  declare content: object

  @column()
  declare order: number

  @column()
  declare page_id: number

  @belongsTo(() => Page)
  declare category: BelongsTo<typeof Page>
}
