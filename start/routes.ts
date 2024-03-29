/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const ContactSettingsController = () => import('#controllers/contact_settings_controller')
const GeneralSettingsController = () => import('#controllers/general_settings_controller')
const CustomizationsController = () => import('#controllers/customizations_controller')
const PagesController = () => import('#controllers/pages_controller')
const MenusController = () => import('#controllers/menus_controller')

router
  .group(() => {
    /**
     * Contact Settings
     */

    router.group(() => {
      router.get('/contact-settings', [ContactSettingsController, 'show'])
      router.post('/contact-settings', [ContactSettingsController, 'update'])
    })

    /**
     * General Settings
     */

    router.group(() => {
      router.get('/general-settings', [GeneralSettingsController, 'show'])
      router.post('/general-settings', [GeneralSettingsController, 'update'])
    })

    /**
     * Website Customization
     */

    router.group(() => {
      router.get('/customization', [CustomizationsController, 'show'])
      router.post('/customization', [CustomizationsController, 'update'])
    })

    /**
     * Pages
     */

    router.group(() => {
      router.get('/pages', [PagesController, 'index'])
      router.get('/pages/:pageUuid', [PagesController, 'show'])
      router.post('/pages/:pageUuid', [PagesController, 'update'])
    })

    /**
     * Menu
     */

    router.group(() => {
      router.get('/menu', [MenusController, 'index'])
      router.post('/menu', [MenusController, 'update'])
    })
  })
  .prefix('/:uuid')
  .use(middleware.auth())

router
  .group(() => {
    router.post('/login', [AuthController, 'store'])
    router.get('/me', [AuthController, 'check'])
    router.post('/logout', [AuthController, 'logout'])
  })
  .prefix('/auth')

router
  .group(() => {
    router.get('/account', [AuthController, 'index'])
    router.post('/account', [AuthController, 'update'])
  })
  .use(middleware.auth())
