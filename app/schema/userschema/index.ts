import { z } from 'zod'

const messages = {
	required: (msg = 'This field') => `${msg} is required`,
	email: (msg: string = 'Please add valid email') => `${msg}`,
	password: 'Password is required, hope you will choose strong one.',
	passwordMin: 'Password field is likely to take more than 8 characters.',
	passwordMax:
		'you`re going too long for password keep it within 22 characters',
}

export const UserSchema = z.object({
	username: z
		.string({
			required_error: messages.required('Username'),
			invalid_type_error: messages.required('Username'),
		})
		.nonempty(messages.required('Username')),
	email: z
		.string({ required_error: messages.required('Email') })
		.nonempty(messages.required('Email'))
		.email({ message: messages.email() }),
	password: z
		.string({
			required_error: messages.password,
		})
		.nonempty(messages.password)
		.min(8, messages.passwordMin)
		.max(22, messages.passwordMax),
})
