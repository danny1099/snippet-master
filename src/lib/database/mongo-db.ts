import mongoose from 'mongoose'

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL!).then(() => {
      console.log('Connected to database is success')
    })
  } catch (error) {
    console.log('Failed to connect to database', error)
  }
}
