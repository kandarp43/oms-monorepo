import { type V2_MetaFunction } from '@remix-run/node'
import { useRouteError } from '@remix-run/react'
import { MscSummary } from '~/components/msc-summary'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Operation' }, { name: 'description', content: 'Welcome to Operation page!' }]
}

export default function Index() {
	return <MscSummary isOperation />
}

export function ErrorBoundary() {
	const error = useRouteError()
	console.log({ error })
	return <>route not found</>
}
