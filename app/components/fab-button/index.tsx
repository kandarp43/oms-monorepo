import React from 'react'

export function FabButton({ showActionPane, updateActionPane }: any) {
	return (
		<button
			className='fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-600 text-white h-[60px] w-[60px] pb-1 rounded-full shadow-lg'
			style={{ minWidth: '60px', fontSize: '20px' }}
			onClick={() => {
				updateActionPane(!showActionPane)
				//navigate('/add');
				// Handle fab button click event
			}}>
			+{/* Add your fab icon here */}
		</button>
	)
}

export default FabButton
