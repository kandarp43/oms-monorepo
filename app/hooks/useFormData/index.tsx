/* eslint-disable react-hooks/rules-of-hooks */
import { type ReactNode, useRef, useState } from 'react'

interface propsType {
	validatorSchema?: any
	validationType?: 'onChange' | 'onSubmit'
}
interface ErrorMessageType {
	render?: Function
	name: string
}
type ErrorMessageReturnType = ReactNode | string

export default function UseFormData(props?: propsType) {
	const [data, setData] = useState({} as any)
	const [errors, setErrors] = useState({} as any)
	const InputState = useRef({} as any)
	const ref = useRef({} as any)
	const isSubmitted = useRef(false)

	function handleSubmit(onSubmit: Function, onError?: Function) {
		return (e: any) => {
			e.preventDefault && e.preventDefault()
			const isError = zodValidator('__global', ref.current, true)
			if (!isError) {
				onSubmit && onSubmit(ref.current)
			} else {
				onError && onError(errors)
			}
		}
	}

	function zodValidator(
		name: string,
		data: typeof ref.current | null,
		isGlobal?: boolean
	) {
		const parsedErrors = props?.validatorSchema.safeParse(data)?.error?.format()
		if (isGlobal) {
			isSubmitted.current = true
			let isError = false
			const _errors: any = {}
			for (const key in parsedErrors) {
				if (key !== '_errors') {
					if (parsedErrors?.[key]?._errors?.length) {
						_errors[key] = parsedErrors?.[key]?._errors
						isError = true
					} else {
						_errors[key] = []
					}
				}
			}
			setErrors(_errors)
			return isError
		} else if (parsedErrors?.[name]) {
			handleErrors(name, parsedErrors?.[name]?._errors)
		} else {
			handleErrors(name, [])
		}
	}

	function handleErrors(name: string, error?: string[]) {
		if (error?.length) {
			setErrors((e: typeof errors) => ({
				...e,
				[name]: error?.length ? error : null,
			}))
		} else {
			const _errors: typeof errors = { ...errors }
			delete _errors[name]
			setErrors(_errors)
		}
	}

	function mountForm(name: string) {
		if (!InputState.current[name]) {
			InputState.current[name] = {
				isDirty: false,
				isTouched: false,
				isFocused: false,
			}
		}
		const inputRef = useRef({} as any)

		function onChange(e: React.ChangeEvent<HTMLInputElement> & { value: any }) {
			const newData: typeof data = { ...data }

			ref.current[name] = e.target?.value || e?.value || ''
			newData[name] = e.target?.value || e?.value || ''
			if (
				(InputState.current[name].isDirty || isSubmitted.current) &&
				(isSubmitted.current || props?.validationType === 'onChange')
			) {
				zodValidator(name, ref.current)
			}
			setData(newData)
		}

		return {
			onChange,
			ref: (rest: any) => {
				inputRef.current = rest || null
				if (inputRef.current) {
					inputRef.current.onfocus = () => {
						InputState.current[name].isTouched = true
						InputState.current[name].isFocused = true
					}
					inputRef.current.onblur = () => {
						if (!InputState.current[name].isDirty) {
							InputState.current[name].isDirty = true
						}
						if (props?.validationType === 'onChange') {
							zodValidator(name, ref.current)
						}
						InputState.current[name].isFocused = false
					}
				}
				return inputRef.current || {}
			},
			value: inputRef?.current?.valueData || data?.[name] || '',
		}
	}

	function ErrorMessage({
		render,
		name,
	}: ErrorMessageType): ErrorMessageReturnType {
		const FieldErrors = errors?.[name]?.map((err: string, i: number) => (
			<li className='text-red-500 font-medium' key={err + i}>
				{err}
			</li>
		))
		return render ? (
			render(errors?.[name])
		) : (
			<ul style={{ listStyleType: 'disc' }}>{FieldErrors}</ul>
		)
	}

	return { data, handleErrors, mountForm, errors, ErrorMessage, handleSubmit }
}
