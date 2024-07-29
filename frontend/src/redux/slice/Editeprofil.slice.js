import {createSlice} from '@reduxjs/toolkit'
import { changeUserName } from '../../services/serviceAPI'

const initialState = {
    newUserName:null,
    error:null
}


export const EditeprofilSlice = createSlice({
    name: 'Editeprofil',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(changeUserName.fulfilled, (state, action) => {
            state.newUserName = action.payload
            state.error = null
        })
        .addCase(changeUserName.rejected, (state, action) => {
            state.newUserName = null
            state.error = action.error.message
            console.log(state.error)
        })
    }
})

export default EditeprofilSlice.reducer