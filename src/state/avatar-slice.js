import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ethers } from "ethers"

async function getAssets(address, limit = 20) {
	const options = { method: "GET" }

	let response = await fetch(`https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=${limit}`, options)
	let result = await response.json()
	console.log(response, result)

	if (response.status >= 300) {
		let message = Object.keys(result)
			.map(key => `${key}: ${result[key]}`)
			.join("\n")
		throw new Error(message)
	}
	return result.assets
}

export const resolveEns = createAsyncThunk("avatar/resolveName", async (ensName, thunkAPI) => {
	const provider = new ethers.providers.CloudflareProvider()
	const address = await provider.resolveName(ensName)
	console.log(address)
	thunkAPI.dispatch({ type: "avatar/setUserEns", payload: ensName })
	thunkAPI.dispatch(fetchNFTs(address))
	return address
})

export const fetchNFTs = createAsyncThunk("avatar/fetchNFT", async (address, thunkAPI) => {
	console.log("calling effect")
	return await getAssets(address, 50)
})

export const avatarSlice = createSlice({
	name: "avatar",
	initialState: {
		userEns: null,
		userAddress: {
			loading: false,
			data: null,
			error: null,
		},
		nft: {
			loading: false,
			data: null,
			error: null,
		},
		selectedNft: null,
	},
	reducers: {
		setUserEns: (state, action) => {
			console.log("updating user", action)
			state.userEns = action.payload
		},
		selectNft: (state, action) => {
			state.selectedNft = action.payload
		},
		clearSelection: (state, action) => {
			state.selectedNft = null
		},
	},
	extraReducers: {
		[resolveEns.pending]: (state, action) => {
			state.userAddress.loading = true
		},
		[resolveEns.fulfilled]: (state, action) => {
			state.userAddress.loading = false
			state.userAddress.data = action.payload
			state.userAddress.error = null
		},
		[resolveEns.rejected]: (state, action) => {
			state.userAddress.loading = false
			state.userAddress.error = action.error.message
			// state.userEns = null
		},

		[fetchNFTs.pending]: (state, action) => {
			state.nft.loading = true
		},
		[fetchNFTs.fulfilled]: (state, action) => {
			state.nft.loading = false
			state.nft.data = action.payload
			state.nft.error = null
		},
		[fetchNFTs.rejected]: (state, action) => {
			state.nft.loading = false
			state.nft.error = action.error.message
		},
	},
})

// Action creators are generated for each case reducer function
export const { setUserEns, selectNft, clearSelection } = avatarSlice.actions

export default avatarSlice.reducer
