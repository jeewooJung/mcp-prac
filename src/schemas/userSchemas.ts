import { z } from 'zod'

// 기본 사용자 스키마
export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2, { message: '이름은 최소 2글자 이상이어야 합니다' }),
  email: z.string().email({ message: '올바른 이메일 형식이 아닙니다' }),
  age: z.number().min(18, { message: '18세 이상만 가입할 수 있습니다' }).optional(),
  createdAt: z.date().default(() => new Date()),
})

// 폼에서 사용할 로그인 스키마
export const loginSchema = z.object({
  email: z.string().email({ message: '올바른 이메일 형식이 아닙니다' }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다' })
    .regex(/[a-z]/, { message: '비밀번호는 최소 하나의 소문자를 포함해야 합니다' })
    .regex(/[A-Z]/, { message: '비밀번호는 최소 하나의 대문자를 포함해야 합니다' })
    .regex(/[0-9]/, { message: '비밀번호는 최소 하나의 숫자를 포함해야 합니다' }),
  rememberMe: z.boolean().default(false),
})

// 사용자 입력에서 생성되는 타입
export type User = z.infer<typeof userSchema>
export type LoginFormData = z.infer<typeof loginSchema>
