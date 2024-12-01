export interface Car {
  firebaseId: string // ID в базе данных Firebase
  id: number // Внутренний уникальный идентификатор автомобиля
  model: string // Модель автомобиля
  image: string // URL главного изображения автомобиля
  gallery: string[] // Галерея изображений автомобиля
  manufactureYear: string // Год выпуска
  price: string // Цена автомобиля
  description: string // Описание автомобиля
  engineType: string // Тип двигателя
  enginePower: string // Мощность двигателя (л.с.)
  accelerationTime: string // Разгон до 100 км/ч (сек.)
  fuelConsumption: string // Расход топлива (л/100 км)
  bodyType: string // Тип кузова
  fuelType: string // Тип топлива (например, бензин, дизель, электричество)
  transmissionType: string // Тип трансмиссии (например, автомат, механика)
  driveType: string // Тип привода (например, передний, задний, полный)
}
