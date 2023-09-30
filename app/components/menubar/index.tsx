import { NavLink } from '@remix-run/react'

export function MenuBar(props: any) {
	const menuItems: any[] = props.menuItems
	const SIDEBAR_COLOR = 'bg-gray-900'
	return (
		<div
			className={['w-20', SIDEBAR_COLOR].join(' ')}
			style={{ boxShadow: '2px 0px 4px rgba(0,0,0,0.3)' }}>
			<ul>
				{menuItems.map((p, i) => (
					<li key={i}>
						<NavLink
							to={p.link || `/${p.text}`}
							className={({ isActive, isPending }) =>
								`flex flex-col items-center opacity-90 py-2 cursor-pointer ${isActive ? 'active' : isPending ? 'pending' : ''}`
							}>
							{p.icon}
							<div className='text-xs text-center text-white opacity-60'>{p.text}</div>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default MenuBar
