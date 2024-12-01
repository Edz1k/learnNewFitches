import { db } from '@/firebase'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import type { Car } from '@/types/cars'

const cars = ref<Car[]>([])

export function useCarStore() {
  // Получение всех машин из Firestore
  const getAllCars = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'cars'))
      cars.value = [] // Очистка массива перед добавлением новых данных

      querySnapshot.forEach((doc) => {
        const car = {
          firebaseId: doc.id,
          ...doc.data(),
        } as Car
        cars.value.push(car) // Добавление машины в массив
      })
    }
    catch (error) {
      console.error('Ошибка при получении данных: ', error)
    }
  }

  const deleteCarbyId = async (firebaseId: string) => {
    try {
      await deleteDoc(doc(db, 'cars', firebaseId))
      await getAllCars()
    }
    catch (error) {
      console.error('Ошибка при удалении данных: ', error)
    }
  }

  const getContentById = async (firebaseId: string) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'cars'))
      let carData = null
      querySnapshot.forEach((doc) => {
        if (doc.id === firebaseId) {
          carData = doc.data() // сохраняем данные
        }
      })
      return carData // возвращаем результат из функции
    }
    catch (error) {
      console.error(error)
      return null
    }
  }

  return { getAllCars, cars, deleteCarbyId, getContentById }
}
