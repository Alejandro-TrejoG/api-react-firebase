// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { initializeApp } = require("firebase/app")
const { getFirestore, collection, getDocs, updateDoc } = require('firebase/firestore/lite');
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCceOzx2G0shvbBhyUkw6k2aHMlP1BbiXg",
    authDomain: "reservaciones-b4f61.firebaseapp.com",
    projectId: "reservaciones-b4f61",
    storageBucket: "reservaciones-b4f61.appspot.com",
    messagingSenderId: "247831938690",
    appId: "1:247831938690:web:752a9a0de2220b2a16969b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

class ReservationsService {
    async getData() {
        try {
            const reservations = collection(db, "reservaciones")
            const response = await getDocs(reservations);
            const ids = response.docs.map(doc => doc.id)
            const data = response.docs.map(doc => doc.data());
            let result = []
            for (let i = 0; i < data.length; i++) {
                result.push({ id: ids[i], ...data[i] })
            }
            return result;
        } catch (error) {
            throw error
        }
    }

    async getOne(id) {
        try {
            const reservations = collection(db, "reservaciones")
            const response = await getDocs(reservations);
            const ids = response.docs.map(doc => doc.id)
            const data = response.docs.map(doc => doc.data());
            let result = []
            for (let i = 0; i < data.length; i++) {
                if (ids[i] == id) {
                    result.push({ id: ids[i], ...data[i] })
                }
            }
            return result;
        } catch (error) {
            throw error
        }
    }

    async updateData() {
        try {
            const reservations = collection(db, "reservaciones")
            const response = await updateDoc(reservations, {})
            const data = response.docs.map(doc => doc.data());
            return data;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ReservationsService