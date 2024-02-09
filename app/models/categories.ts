import { column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'

export default class Categories extends BasicModel {
  @column()
  declare name: string
}
