import { column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'

export default class SocialLinks extends BasicModel {
  // platform is set as a string but will work as en enum
  @column()
  declare platform: string

  @column()
  declare url: string

  @column()
  declare is_active: boolean
}
