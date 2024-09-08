import mongoose from 'mongoose'
import { type AuthUser } from '@/modules/auth/types'

const AuthUserSchema = new mongoose.Schema<AuthUser>(
  {
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true }
  },
  { timestamps: true }
)

export const Users = mongoose.models.Users || mongoose.model('Users', AuthUserSchema)
