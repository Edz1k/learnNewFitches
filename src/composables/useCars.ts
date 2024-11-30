import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '~/firebase'
import type { Car } from '~/types/cars'

export function useCarStore() {
  // Массив машин (карточек)
  const cars = ref<Car[]>([])
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

  const createCar = async (car: any) => {
    try {
      const docRef = await addDoc(collection(db, 'cars'), car)
      return docRef.id
    }
    catch (error) {
      console.error('Ошибка при добавлении данных: ', error)
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
  return { getAllCars, cars, createCar, deleteCarbyId }
}
