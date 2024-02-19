/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const ContactSettingsController = () => import('#controllers/contact_settings_controller')
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
  })
  .prefix('/:uuid')

/**
 * General Settings
 */

router.group(() => {
  router.get('/general-settings', async () => {
    return {
      website_title: 'Forkee',
      website_headline: 'The best or nothing',
      website_logo: {
        filename: 'forkee-logo.png',
        path: '/img/forkee-logo.png',
        description: 'Forkee logo',
      },
      website_favicon: {
        filename: 'forkee-favicon.png',
        path: '/img/forkee-favicon.png',
        description: 'Forkee favicon',
      },
      address: {
        street: '46 Sente des Radoubs',
        post_code: '33300',
        city: 'Bordeaux',
      },
      timetable: [
        {
          day_of_week: 'Lundi',
          opening_time: '2002-02-21T08:30:00.000Z',
          closing_time: '2002-02-21T12:30:00.000Z',
        },
        {
          day_of_week: 'Lundi',
          opening_time: '2002-02-21T14:30:00.000Z',
          closing_time: '2002-02-21T17:30:00.000Z',
        },
        {
          day_of_week: 'Mardi',
          opening_time: '2002-02-21T08:30:00.000Z',
          closing_time: '2002-02-21T12:30:00.000Z',
        },
        {
          day_of_week: 'Mardi',
          opening_time: '2002-02-21T14:30:00.000Z',
          closing_time: '2002-02-21T17:30:00.000Z',
        },
        {
          day_of_week: 'Mercredi',
          opening_time: '2002-02-21T08:30:00.000Z',
          closing_time: '2002-02-21T12:30:00.000Z',
        },
        {
          day_of_week: 'Mercredi',
          opening_time: '2002-02-21T14:30:00.000Z',
          closing_time: '2002-02-21T17:30:00.000Z',
        },
      ],
    }
  })
})

/**
 * Website Customization
 */

router.group(() => {
  router.get('/customization', async () => {
    return {
      header_layout: 1,
      theme: 2,
      primary_color: '#FF9900',
      secondary_color: '#6624FF',
      title_font: 'Poppins',
      text_font: 'DM Sans',
      button_font: 'Raleway',
      footer_layout: 3,
    }
  })
})

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
