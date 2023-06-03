import dotenv from 'dotenv';

dotenv.config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        'vuetify/lib/styles/main.css',
        '@mdi/font/css/materialdesignicons.css'
    ],
    build: {
        transpile: ['vuetify']
    },

    modules: [
        // ...
        '@pinia/nuxt',
    ],

    runtimeConfig: {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId,

        public: {
            apiKey: process.env.apiKey,
            authDomain: process.env.authDomain,
            projectId: process.env.projectId,
            storageBucket: process.env.storageBucket,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.appId,
            measurementId: process.env.measurementId,
        }
    },
})
