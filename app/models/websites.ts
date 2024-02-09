import type { HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import { column, hasMany, manyToMany } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Attachments from './attachments.js'
import TimeSlots from './time_slots.js'
import SocialLinks from './social_links.js'
import Pages from './pages.js'
import Products from './products.js'
import Users from './users.js'

export default class Websites extends BasicModel {
  @column()
  declare website_title: string

  @column()
  declare website_headline: string

  @column()
  declare website_logo: string

  @column()
  declare website_favicon: string

  @column()
  declare street: string

  @column()
  declare post_code: string

  @column()
  declare city: string

  @column()
  declare email: string

  @column()
  declare phone_number: string

  @column()
  declare header_layout: string

  @column()
  declare theme: string

  @column()
  declare primary_color: string

  @column()
  declare secondary_color: string

  @column()
  declare title_font: string

  @column()
  declare text_font: string

  @column()
  declare button_font: string

  @column()
  declare footer_layout: string

  @manyToMany(() => Attachments)
  declare websites: ManyToMany<typeof Attachments>

  @hasMany(() => TimeSlots)
  declare time_slots: HasMany<typeof TimeSlots>

  @hasMany(() => SocialLinks)
  declare social_links: HasMany<typeof SocialLinks>

  @hasMany(() => Products)
  declare products: HasMany<typeof Products>

  @hasMany(() => Pages)
  declare pages: HasMany<typeof Pages>

  @hasMany(() => Users)
  declare users: HasMany<typeof Users>
}
