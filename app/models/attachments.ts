import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { column, manyToMany } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Websites from './websites.js'

export default class Attachments extends BasicModel {
  @column()
  declare filename: string

  @column()
  declare path: string

  @column()
  declare description: string

  @column()
  declare type: string

  @manyToMany(() => Websites)
  declare websites: ManyToMany<typeof Websites>
}
