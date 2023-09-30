import { Link } from '@remix-run/react'
import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Operation Orders' }, { name: 'description', content: 'Welcome to MSC page!' }]
}

export default function Order() {
	return (
		<div className='relative w-full'>
			<Link
				to='/msc'
				className='absolute top-4 left-1/2 text-white'>
				back
			</Link>
			<p className='flex items-center justify-center h-screen w-full font-mono text-lg bg-gray-600 text-white'>
				no orders yet! buy something and will show you here
			</p>
		</div>
	)
}
