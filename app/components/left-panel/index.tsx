import FabButton from '../fab-button'
import UseScrollDepth from '../use-scroll-depth'

/* eslint-disable-next-line */
export interface LeftPanelProps {
	text: String
	icon: String
}

export function LeftPanel({ showActionPane, updateActionPane }: any) {
	const depth = UseScrollDepth()
	return (
		<>
			<div className={['text-lg', depth >= 0 && depth < 60 && 'font-bold'].join(' ')}>Order Summary</div>
			<div className={['text-lg', depth > 60 && depth < 90 && 'font-bold'].join(' ')}>Packages</div>
			<div className={['text-lg', depth > 90 && 'font-bold'].join(' ')}>Notes</div>
			<FabButton
				showActionPane={showActionPane}
				updateActionPane={updateActionPane}
			/>
		</>
	)
}

export default LeftPanel
