import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { belongsTo, column } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Page from './page.js'

export interface WidgetContent {
  title?: string
  subtitle?: string
  hasButton?: boolean
  buttonContent?: string
  buttonColor?: string
  buttonLink?: string
  imagePosition?: 'left' | 'right'
  image?: number
}

export default class Widget extends BasicModel {
  @column()
  declare name: string

  @column()
  declare content: WidgetContent

  @column()
  declare order: number

  @column()
  declare pageId: number

  @belongsTo(() => Page)
  declare page: BelongsTo<typeof Page>
}
