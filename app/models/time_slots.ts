import { column } from '@adonisjs/lucid/orm'
import BasicModel from './base.js'

export default class TimeSlots extends BasicModel {
  @column()
  declare opening_time: string

  @column()
  declare closing_time: string

  @column()
  declare day_of_week: string
}
