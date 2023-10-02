import type { V2_MetaFunction } from '@remix-run/node'
import UserForm from '~/components/user-form'

export const meta: V2_MetaFunction = () => {
	return [
		{ title: 'zod' },
		{ name: 'description', content: 'Welcome to Zod page!' },
	]
}

export default function Index() {
	return <UserForm />
}
