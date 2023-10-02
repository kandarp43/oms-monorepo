import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLocation,
} from '@remix-run/react'
import stylesheet from '~/tailwind.css'
import MenuBar from './components/menubar'
import { MscMenuItems, OperationsMenuItems } from './data/menu-data'

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
	{ rel: 'stylesheet', href: stylesheet },
]

export default function App() {
	const location = useLocation()
	const isMenubar = !['/', '/zod'].some((path) => path === location.pathname)
	const isMsc = location?.pathname?.toLowerCase()?.startsWith('/msc')
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width,initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				<div className='flex bg-gray-300 '>
					{isMenubar && (
						<MenuBar menuItems={isMsc ? MscMenuItems : OperationsMenuItems} />
					)}
					<Outlet />
				</div>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}
