import React from 'react'
import UseFormData from '~/hooks/useFormData'
import { UserSchema } from '~/schema/userschema'

export const UserForm: React.FC = () => {
	const { mountForm, ErrorMessage, handleSubmit } = UseFormData({
		validatorSchema: UserSchema,
		validationType: 'onChange',
	})

	function onSubmit(data: any) {
		console.log('data: ', data)
	}

	return (
		<div className=' mx-auto p-24 w-2/4 my-auto h-screen'>
			<h1 className='text-2xl font-bold mb-4'>User form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<label htmlFor='username' className='block mb-2 cursor-pointer'>
						Username
					</label>
					<input
						type='text'
						id='username'
						name='username'
						className='w-full px-3 py-2 border border-gray-300 rounded'
						{...mountForm('username')}
					/>
					<ErrorMessage name='username' />
				</div>
				<div className='mb-4'>
					<label htmlFor='email' className='block mb-2 cursor-pointer'>
						Email
					</label>
					<input
						type='text'
						id='email'
						name='email'
						className='w-full px-3 py-2 border border-gray-300 rounded'
						{...mountForm('email')}
					/>
					<ErrorMessage name='email' />
				</div>
				<div className='mb-4'>
					<label htmlFor='password' className='block mb-2 cursor-pointer'>
						Password:
					</label>
					<input
						id='password'
						type='password'
						name='password'
						className='w-full px-3 py-2 border border-gray-300 rounded'
						{...mountForm('password')}
					/>
					<ErrorMessage name='password' />
				</div>
				<div>
					<button
						type='submit'
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full my-2'
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}

export default UserForm
