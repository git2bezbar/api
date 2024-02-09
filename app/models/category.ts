import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, hasMany } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'
import Product from './product.js'

export default class Category extends BasicModel {
  @column()
  declare name: string

  @hasMany(() => Product)
  declare category: HasMany<typeof Product>
}
