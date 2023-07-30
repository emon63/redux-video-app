import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getRelatedVideos from "./relatedVideoAPI";

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedVideos = createAsyncThunk(
    'relatedVideos/fetchRelatedVideos',
    async ({ tags, id }) => {
        console.log(id, tags)
        const relatedVideos = await getRelatedVideos({ tags, id });
        console.log(relatedVideos)
        return relatedVideos
    }
)

const relatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    // reducers: {

    // },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload
            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = [];
                state.isError = true;
                state.error = action.error?.message;
            })
    }
})

export default relatedVideosSlice.reducer;