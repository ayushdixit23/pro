import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSRs = dynamic(
	() => import('../components/Main'),
	{ ssr: false }
)


const page = () => {
	return (
		<div><DynamicComponentWithNoSSRs /></div>
	)
}

export default page