import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.dropTableIfExists('websites')
    this.schema.dropTableIfExists('attachements')
    this.schema.dropTableIfExists('time_slots')
    this.schema.dropTableIfExists('social_links')
    this.schema.dropTableIfExists('products')
    this.schema.dropTableIfExists('categories')
    this.schema.dropTableIfExists('pages')
    this.schema.dropTableIfExists('widgets')
    this.schema.dropTableIfExists('users')
    this.schema.dropTableIfExists('users_websites')

    this.schema.createTable('websites', (table) => {
      table.increments('id')
      table.string('website_title').notNullable()
      table.string('website_headline')
      table.string('website_logo')
      table.string('website_favicon')
      table.string('street')
      table.string('post_code')
      table.string('city')
      table.string('email')
      table.string('phone_number')
      table.string('header_layout')
      table.string('theme')
      table.string('primary_color')
      table.string('secondary_color')
      table.string('title_font')
      table.string('text_font')
      table.string('button_font')
      table.string('footer_layout')
      table.string('uuid').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('categories', (table) => {
      table.increments('id')
      table.string('name').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('products', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description')
      table.integer('price').notNullable()
      table.integer('category_id').unsigned().references('categories.id')
      table
        .integer('website_id')
        .unsigned()
        .references('websites.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('social_links', (table) => {
      table.increments('id')
      table.string('platform').notNullable()
      table.string('url')
      table.boolean('is_active').notNullable()
      table
        .integer('website_id')
        .unsigned()
        .references('websites.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('time_slots', (table) => {
      table.increments('id')
      table.string('opening_time').notNullable()
      table.string('closing_time').notNullable()
      table.string('day_of_week').notNullable()
      table.integer('slot_number').notNullable()
      table
        .integer('website_id')
        .unsigned()
        .references('websites.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('attachements', (table) => {
      table.increments('id')
      table.string('filename').notNullable()
      table.string('path').notNullable()
      table.string('description')
      table.string('type').notNullable()
      table
        .integer('website_id')
        .unsigned()
        .references('websites.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('pages', (table) => {
      table.increments('id')
      table.string('type').notNullable()
      table.integer('order').notNullable()
      table.string('description')
      table.boolean('is_active').notNullable()
      table.string('uuid')
      table
        .integer('website_id')
        .unsigned()
        .references('websites.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('widgets', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.json('content').notNullable()
      table.integer('order').notNullable()
      table
        .integer('page_id')
        .unsigned()
        .references('pages.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('username').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('firstname').notNullable()
      table.string('lastname').notNullable()
      table.string('uuid')
      table.string('reset_password_token')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('users_websites', (table) => {
      table.increments('id')
      table.integer('website_id').unsigned().references('websites.id')
      table.integer('user_id').unsigned().references('users.id')
      table.string('role')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTableIfExists('websites')
    this.schema.dropTableIfExists('attachements')
    this.schema.dropTableIfExists('time_slots')
    this.schema.dropTableIfExists('social_links')
    this.schema.dropTableIfExists('products')
    this.schema.dropTableIfExists('categories')
    this.schema.dropTableIfExists('pages')
    this.schema.dropTableIfExists('widgets')
    this.schema.dropTableIfExists('users')
  }
}
