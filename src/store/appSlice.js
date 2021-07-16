import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOptions = createAsyncThunk(
	'options.db/fetch',
	async () => window.electron.ipcRenderer.invoke('fetchConfig')
);

const appSlice = createSlice({
	name: 'app',
	initialState: {
		loading: true,
		timeZone: 'Europe/Zurich',
		language: 'en-US',
		city: 'Geneva,CH'
	},
	extraReducers: {
		[fetchOptions.fulfilled]: (state, action) => {
			state.timeZone = action.payload.timeZone;
			state.language = action.payload.language;
			state.city = action.payload.city;
			state.loading = false;
		}
	}
});

export const { } = appSlice.actions;

export default appSlice.reducer;
