import { column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'

export default class SocialLink extends BasicModel {
  @column()
  declare platform: string

  @column()
  declare url: string

  @column()
  declare is_active: boolean
}
