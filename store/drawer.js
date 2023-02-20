import { defineStore } from 'pinia'

export const useDraerStore = defineStore('websiteDraer', {
    state: () => ({
        drawer: false,
        rightDrawer: false,
        routes: [
            {
                title: 'Home',
                icon: 'mdi-home',
                to: '/',
                menu: false
            },
            {
                title: 'about',
                icon: 'mdi-doctor',
                to: '/about',
                menu: false
            },
            {
                title: 'Contact',
                icon: 'mdi-account-voice',
                to: '/contact',
                menu: false
            },
            {
                title: 'Courses',
                icon: 'mdi-account-voice',
                to: '/courses',
                menu: false
            },
            {
                title: 'Event',
                icon: 'mdi-account-voice',
                to: '/event',
                menu: false
            }
        ]
    })
})