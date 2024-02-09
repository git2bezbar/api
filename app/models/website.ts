import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, hasMany } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Attachment from './attachment.js'
import TimeSlot from './time_slot.js'
import SocialLink from './social_link.js'
import Page from './page.js'
import Product from './product.js'
import User from './user.js'

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

  @hasMany(() => Attachment)
  declare websites: HasMany<typeof Attachment>

  @hasMany(() => TimeSlot)
  declare time_slots: HasMany<typeof TimeSlot>

  @hasMany(() => SocialLink)
  declare social_links: HasMany<typeof SocialLink>

  @hasMany(() => Product)
  declare products: HasMany<typeof Product>

  @hasMany(() => Page)
  declare pages: HasMany<typeof Page>

  @hasMany(() => User)
  declare users: HasMany<typeof User>
}
