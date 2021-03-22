import React, {useEffect} from 'react'
import Table from '../components/Table'
import {useSelector, useDispatch} from 'react-redux'
import {selectAllHouses, fetchHouses} from '../features/houses/housesSlice'

const Houses = () => {
	const dispatch = useDispatch()
	const houses = useSelector(selectAllHouses)

	const houseStatus = useSelector((state) => state.houses.status)
	const error = useSelector((state) => state.houses.error)

	useEffect(() => {
		if (houseStatus === 'idle') {
			dispatch(fetchHouses())
		}
	}, [houseStatus, dispatch])

	let content

	if (houseStatus === 'loading') {
		return <div className="loader">Loading...</div>
	}

	if (houseStatus === 'succeeded') {
		console.log(houses)
	} else if (houseStatus === 'error') {
		return <div>{error}</div>
	}

	return (
		// <Table/>
		<div>{JSON.stringify(houses)}</div>
	)
}
export default Houses
