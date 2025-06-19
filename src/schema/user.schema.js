import z from 'zod';

const UserSchema = z.object({
    userName: z.string().min(3, 'Username is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    avatar: z.string().url('Invalid URL for avatar').optional(),
})

export { UserSchema };