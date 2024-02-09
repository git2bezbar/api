import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, hasMany } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'
import Categories from './categories.js'

export default class Products extends BasicModel {
  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number

  @hasMany(() => Categories)
  declare category: HasMany<typeof Categories>
}
