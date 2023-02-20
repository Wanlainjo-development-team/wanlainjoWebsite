import { defineStore } from 'pinia'
import { db } from "@/extra/firebase"
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    serverTimestamp
} from 'firebase/firestore'

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable
} from "firebase/storage"
import uuid from 'uuid-random'

// import snackbar store
import { useSnackbarStore } from './snackbar'

const snackbar = useSnackbarStore()

export const useRegistrationStore = defineStore('registration', {
    state: () => ({
        studentsname: '',
        sex: 'Male',
        address: '',
        dob: '',
        state: '',
        phone: '',
        email: '',
        sponsorName: '',
        sponsorAddress: '',
        sponsorPhone: '',
        course1: {
            course: '',
            duration: 1,
            price: 30000
        },
        course2: {
            course: '',
            duration: 1,
            price: 30000
        },
        course3: {
            course: '',
            duration: 1,
            price: 30000
        },
        campus: 'D-line - Port Harcourt',
        agrement: true,
        verified: false,
        loading: false,
        image: null,
    }),

    actions: {
        registerStudent() {
            if (this.studentsname == '' || this.address == '' || this.dob == '' || this.state == '' || this.phone == '' || this.email == '' || this.sponsorName == '' || this.sponsorAddress == '' || this.sponsorPhone == '' || this.course1.course == '' || this.course2.course == '' || this.course3.course == '' || this.campus == '' || this.agrement == false || this.image == null) {
                snackbar.active = true
                snackbar.color = 'error'
                snackbar.text = 'Please fill all fields'
            }

            //  start loading
            this.loading = true

            // upload image to firebase storage

            const storage = getStorage()

            // image storage link
            let link = `students/${uuid()}/${this.image.name}`

            // upload task
            const uploadTask = uploadBytesResumable(ref(storage, link), this.image)

            // upload progress
            uploadTask.on('state_changed',
                (snapshot) => { },
                (error) => { console.log(error) },
                () => {
                    // get image download url
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(async (downloadURL) => {
                            // add student to firestore
                            await addDoc(collection(db, 'students'), {
                                studentsname: this.studentsname,
                                sex: this.sex,
                                address: this.address,
                                dob: this.dob,
                                state: this.state,
                                phone: this.phone,
                                email: this.email,
                                sponsorName: this.sponsorName,
                                sponsorAddress: this.sponsorAddress,
                                sponsorPhone: this.sponsorPhone,
                                course1: this.course1,
                                course2: this.course2,
                                course3: this.course3,
                                campus: this.campus,
                                agrement: this.agrement,
                                verified: this.verified,
                                image: downloadURL,
                                createdAt: serverTimestamp()
                            })

                            // stop loading
                            this.loading = false

                            // show snackbar
                            snackbar.active = true
                            snackbar.color = 'success'
                            snackbar.text = 'Student registered successfully'
                        })
                })
        }
    }
})