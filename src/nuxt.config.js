const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
** Headers of the page
*/
    head: {
        title: 'Hale Homes',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Pacifico'
            },
            {
                rel: 'stylesheet',
                href: 'https://use.typekit.net/ate4nbk.css'
            }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: ['~/assets/sass/main.scss'],
    transition: {
        name: 'slide--up',
        mode: 'out-in'
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-fontawesome',
        '~/plugins/firestore',
        { src: '~/plugins/accounting', ssr: false },
        { src: '~/plugins/lazyload', ssr: false },
        '~/plugins/vue-in-viewport',
        '~/plugins/vue-lidate'
    ],

    // Server middlware
    serverMiddleware: ['~/middleware/api/contact'],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        [
            'vue-scrollto/nuxt',
            {
                container: 'body',
                duration: 1000,
                easing: 'ease',
                offset: 0,
                force: true,
                cancelable: true,
                onStart: false,
                onDone: false,
                onCancel: false,
                x: false,
                y: true
            }
        ],
        [
            'nuxt-mq',
            {
                // Default breakpoint for SSR
                defaultBreakpoint: 'default',
                breakpoints: {
                    md: 1023,
                    lg: Infinity
                }
            }
        ],
        [
            '@nuxtjs/google-analytics',
            {
                id: 'UA-136551709-1'
            }
        ]
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },
    dev: process.env.NODE_ENV === 'DEV',
    /*
** Build configuration
*/
    buildDir: '../functions/nuxt',
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
