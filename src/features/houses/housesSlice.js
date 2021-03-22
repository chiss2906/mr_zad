import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {fetchData, postData} from '../../helpers'

const initialState = {
	houses: [],
	status: 'idle',
	error: null,
}

export const fetchHouses = createAsyncThunk('houses/fetchHouses', async () => {
	const data = await fetchData(
		'http://mobile-reality-backend.sadek.usermd.net/houses/all',
	)
	return data.results
})

export const addNewHouse = createAsyncThunk(
	'houses/addNewHouse',
	async (initialHouse) => {
		const data = await postData(
			'http://mobile-reality-backend.sadek.usermd.net/houses',
			{house: initialHouse},
		)
		return data.results
	},
)

const housesSlice = createSlice({
	name: 'houses',
	initialState,
	reducers: {
		houseRemoved(state, action) {
			const {id, title, content} = action.payload
			const existingHouse = state.houses.find((house) => house.id === id)
			if (existingHouse) {
				existingHouse.title = title
				existingHouse.content = content
			}
		},
	},
	extraReducers: {
		[fetchHouses.pending]: (state, action) => {
			state.status = 'loading'
		},
		[fetchHouses.fulfilled]: (state, action) => {
			state.status = 'succeeded'
			state.houses = state.houses.concat(action.payload)
		},
		[fetchHouses.rejected]: (state, action) => {
			state.status = 'failed'
			state.error = action.payload
		},
		[addNewHouse.fulfilled]: (state, action) => {
			state.houses.push(action.payload)
		},
	},
})

export const {houseAdded, houseRemoved} = housesSlice.actions

export default housesSlice.reducer

export const selectAllHouses = (state) => state.houses.houses

export const selectHouseById = (state, houseId) =>
	state.houses.houses.find((house) => house.id === houseId)
