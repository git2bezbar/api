import { column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'

export default class Product extends BasicModel {
  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare price: number
}
