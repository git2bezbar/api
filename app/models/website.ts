import type { HasMany } from '@adonisjs/lucid/types/relations'
import { column, hasMany } from '@adonisjs/lucid/orm'

import BasicModel from './base.js'
import Attachment from './attachement.js'
import TimeSlot from './time_slot.js'
import SocialLink from './social_link.js'
import Page from './page.js'
import Product from './product.js'
import User from './user.js'

export default class Website extends BasicModel {
  @column()
  declare websiteTitle: string

  @column()
  declare websiteHeadline: string

  @column()
  declare websiteLogo: string

  @column()
  declare websiteFavicon: string

  @column()
  declare street: string

  @column()
  declare postCode: string

  @column()
  declare city: string

  @column()
  declare email: string

  @column()
  declare phoneNumber: string

  @column()
  declare headerLayout: string

  @column()
  declare theme: string

  @column()
  declare primaryColor: string

  @column()
  declare secondaryColor: string

  @column()
  declare titleFont: string

  @column()
  declare textFont: string

  @column()
  declare buttonFont: string

  @column()
  declare footerLayout: string

  @column()
  declare uuid: string

  @hasMany(() => Attachment)
  declare attachments: HasMany<typeof Attachment>

  @hasMany(() => TimeSlot)
  declare timeSlots: HasMany<typeof TimeSlot>

  @hasMany(() => SocialLink)
  declare socialLinks: HasMany<typeof SocialLink>

  @hasMany(() => Product)
  declare products: HasMany<typeof Product>

  @hasMany(() => Page)
  declare pages: HasMany<typeof Page>

  @hasMany(() => User)
  declare users: HasMany<typeof User>
}
