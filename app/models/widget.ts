import { column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'

export default class Widget extends BasicModel {
  @column()
  declare name: string

  @column()
  declare content: JSON

  @column()
  declare order: number
}
