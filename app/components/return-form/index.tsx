import React, { useState } from 'react'
import { Form } from 'react-router-dom'

interface ReturnFormValues {
	orderId: string
	reason: string
	details: string
}

export const ReturnForm: React.FC<{ updateActionPane: Function }> = ({ updateActionPane }: { updateActionPane: Function }) => {
	const [formValues, setFormValues] = useState<ReturnFormValues>({
		orderId: '',
		reason: '',
		details: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}))
	}

	return (
		<div className='max-w-md mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>Create Return Authorization</h1>
			<Form
				method='post'
				onSubmit={() => updateActionPane(false)}>
				<div className='mb-4'>
					<label
						htmlFor='orderId'
						className='block mb-2'>
						Order ID:
					</label>
					<input
						type='text'
						id='orderId'
						name='orderId'
						value={formValues.orderId}
						onChange={handleChange}
						className='w-full px-3 py-2 border border-gray-300 rounded'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='reason'
						className='block mb-2'>
						Reason for Return:
					</label>
					<input
						type='text'
						id='reason'
						name='reason'
						value={formValues.reason}
						onChange={handleChange}
						className='w-full px-3 py-2 border border-gray-300 rounded'
						required
					/>
				</div>
				<div className='mb-4'>
					<label
						htmlFor='details'
						className='block mb-2'>
						Additional Details:
					</label>
					<textarea
						id='details'
						name='details'
						value={formValues.details}
						onChange={handleChange}
						className='w-full px-3 py-2 border border-gray-300 rounded'
						required
					/>
				</div>
				<div>
					<button
						type='submit'
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
						Submit
					</button>
				</div>
			</Form>
		</div>
	)
}

export default ReturnForm
