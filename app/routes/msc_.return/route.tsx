import { Link } from '@remix-run/react'
import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Msc Return' }, { name: 'description', content: 'Welcome to MSC page!' }]
}
export default function Return() {
	return (
		<div className='relative  w-full'>
			<Link
				to='/msc'
				className='absolute top-4 left-1/2'>
				back
			</Link>
			<p className='flex items-center justify-center h-screen w-full font-mono text-lg bg-violet-400'>Return section</p>
		</div>
	)
}
