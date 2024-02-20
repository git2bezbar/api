/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ContactSettingsController = () => import('#controllers/contact_settings_controller')
const GeneralSettingsController = () => import('#controllers/general_settings_controller')
const CustomizationsController = () => import('#controllers/customizations_controller')
import router from '@adonisjs/core/services/router'

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
  })
  .prefix('/:uuid')

/**
 * Account
 */

router.group(() => {
  router.get('/account', async () => {
    return {
      firstname: 'John',
      lastname: 'Doe',
      profile_picture: {
        filename: 'profile-picture.png',
        path: '/img/profile-picture.png',
        description: 'Profile Picture',
      },
    }
  })
})
