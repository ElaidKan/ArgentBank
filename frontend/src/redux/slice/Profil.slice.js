import {createSlice} from '@reduxjs/toolkit'
import {profile} from '../../services/serviceAPI'


const initialState = {
    user:null,
    error:null,
}

export const ProfilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(profile.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null
        })
        builder.addCase(profile.rejected, (state, action) => {
            state.user = null
            state.error = action.error.message
        })
    }
})

export default ProfilSlice.reducer