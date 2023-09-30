import { Link } from '@remix-run/react'
import type { V2_MetaFunction } from '@remix-run/node'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Msc reporting' }, { name: 'description', content: 'Welcome to MSC page!' }]
}
export default function Reporting() {
	return (
		<div className='relative  w-full'>
			<Link
				to='/msc'
				className='absolute text-white top-4 left-1/2'>
				back
			</Link>
			<p className='flex items-center justify-center h-screen w-full font-mono text-lg bg-fuchsia-900 text-white'>Reporting section</p>
		</div>
	)
}
