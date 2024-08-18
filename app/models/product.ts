import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'
import Website from './website.js'

interface ProductContent {
  title?: string
  description?: string
  price?: number
  category_id?: number
}

export default class Product extends BasicModel {
  @column({ serializeAs: 'content' })
  declare content: { [key: string]: ProductContent }

  @column()
  declare website_id: number

  @belongsTo(() => Website)
  declare website: BelongsTo<typeof Website>
}
