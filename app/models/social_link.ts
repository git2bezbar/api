import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Website from './website.js'

export default class SocialLink extends BasicModel {
  @column()
  declare platform: string

  @column()
  declare url: string

  @column()
  declare is_active: boolean

  @column()
  declare websiteId: number

  @belongsTo(() => Website)
  declare website: BelongsTo<typeof Website>
}
