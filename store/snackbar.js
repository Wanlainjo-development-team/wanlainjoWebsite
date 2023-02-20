import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
    state: () => ({
        active: false,
        text: "",
        color: ""
    }),
})