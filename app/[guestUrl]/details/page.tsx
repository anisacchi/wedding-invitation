import Countdown from '@/components/Countdown'
import Maps from '@/components/Map'
import React from 'react'

const page = () => {
	return (
		<div>
			<Countdown weddingDate='2024-12-28T00:00:00' />
			<div className='mt-5'>
				<Maps />
			</div>
		</div>
	)
}

export default page