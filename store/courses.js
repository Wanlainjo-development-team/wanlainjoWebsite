import { defineStore } from 'pinia'
import { db } from "@/extra/firebase"
import { collection, onSnapshot } from "firebase/firestore"

export const useCoursesStore = defineStore('courses', {
    state: () => ({
        courses: []
    }),

    actions: {
        async fetchCourses() {
            const coursesRef = collection(db, 'courses')
            onSnapshot(coursesRef, (snapshot) => {
                this.courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            })
        }
    }
})