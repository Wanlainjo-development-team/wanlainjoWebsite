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
                icon: 'mdi-information',
                to: '/about',
                menu: false
            },
            {
                title: 'Contact',
                icon: 'mdi-contacts',
                to: '/contact',
                menu: false
            },
            {
                title: 'Courses',
                icon: 'mdi-book-open-blank-variant',
                to: '/courses',
                menu: false
            },
            {
                title: 'Event',
                icon: 'mdi-party-popper',
                to: '/event',
                menu: false
            }
        ]
    })
})