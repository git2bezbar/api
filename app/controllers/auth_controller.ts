import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async index({ auth }: HttpContext) {
    const { firstname, lastname, email, username } = auth.user!
    return { firstname, lastname, email, username }
  }

  async store({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return response.json({ user, isLogged: true })
  }

  async update({ request, auth }: HttpContext) {
    const { firstname, lastname } = request.only(['firstname', 'lastname'])
    const user = await User.query().where('uuid', auth.user!.uuid).update({ firstname, lastname })
    return user
  }

  async check({ auth }: HttpContext) {
    return auth.check()
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.send({ isLogged: false })
  }
}
