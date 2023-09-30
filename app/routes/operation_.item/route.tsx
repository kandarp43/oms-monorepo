import { Link } from '@remix-run/react'
import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Operation Items' }, { name: 'description', content: 'Welcome to MSC page!' }]
}

export default function Item() {
	return (
		<div className='relative w-full'>
			<Link
				to='/operation'
				className='absolute top-4 left-1/2'>
				back
			</Link>
			<p className='flex items-center justify-center h-screen w-full font-mono text-lg bg-yellow-300'>
				no Items yet! don't worry it will show up when available
			</p>
		</div>
	)
}
