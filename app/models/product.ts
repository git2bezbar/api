import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'
import Category from './category.js'
import Website from './website.js'

export default class Product extends BasicModel {
  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare category_id: number

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>

  @column()
  declare website_id: number

  @belongsTo(() => Website)
  declare website: BelongsTo<typeof Website>
}
