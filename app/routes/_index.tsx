import { type V2_MetaFunction } from '@remix-run/node'
import { Link, useRouteError } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'welcome to the dashboard' }]
}

const pages = [
	{ title: 'Msc', route: '/msc' },
	{ title: 'Operation', route: '/operation' },
	{ title: 'zod', route: '/zod' },
]

export default function Index() {
	return (
		<div className='bg-slate-500 h-screen w-full'>
			<div className='container mx-auto p-48 h-screen'>
				<div className='flex justify-center items-center h-full'>
					{pages.map((page) => {
						return (
							<Link
								key={page?.route}
								className='text-yellow-200 m-3 px-4 py-2 ring-1 ring-yellow-300'
								to={page?.route}
							>
								{page.title}
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	console.log({ error })
	return <>route not found</>
}
