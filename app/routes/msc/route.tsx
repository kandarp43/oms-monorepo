import type { V2_MetaFunction } from '@remix-run/node'
import { MscSummary } from '~/components/msc-summary'

export const meta: V2_MetaFunction = () => {
	return [{ title: 'Msc' }, { name: 'description', content: 'Welcome to MSC page!' }]
}

export default function Index() {
	return <MscSummary />
}
