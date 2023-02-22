import { defineStore } from 'pinia'
import { db } from "@/extra/firebase"
import { addDoc, collection, onSnapshot } from "firebase/firestore"

// import snackbar store
import { useSnackbarStore } from './snackbar'

const snackbar = useSnackbarStore()

export const useContactStore = defineStore('contact', {
    state: () => ({
        name: '',
        email: '',
        subject: '',
        message: '',
        loading: false,
    }),

    actions: {
        async sendUsAMessage() {
            if (this.name == '' || this.email == '' || this.subject == '' || this.message == '') return

            this.loading = true
            await addDoc(collection(db, 'contact'), {
                name: this.name,
                email: this.email,
                subject: this.subject,
                message: this.message,
            })
            this.loading = false
            snackbar.active = true
            snackbar.text = 'Message sent successfully.\nWe will get back to you shortly'
            snackbar.color = 'success'

            this.name = ''
            this.email = ''
            this.subject = ''
            this.message = ''
        }
    }
})