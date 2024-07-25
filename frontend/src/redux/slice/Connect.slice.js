import {createSlice} from '@reduxjs/toolkit'
import {login} from '../../services/serviceAPI'
const initialState = {
    token:null,
    connected:false,
    error:null
}

export const ConnectSlice = createSlice({
    name: 'connect',
    initialState,
    reducers: {
        disconnect: (state) => {
            state.token = null
            state.connected = false
            state.error = null
            localStorage.removeItem("token")
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload
            state.connected = true
            state.error = null
        })
        builder.addCase(login.rejected, (state, action) => {
            state.token = null
            state.connected = false
            state.error = action.error.message
        })
    }
})
export const {disconnect} = ConnectSlice.actions
export default ConnectSlice.reducer