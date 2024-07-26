import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/login", async ({ email, password }) => {
try {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", {
        email,
        password
    })
    const token = response.data.body.token
    localStorage.setItem("token", token)
    console.log(token)
    return token
} catch (error) {
    throw new Error(error)
    console.log(error)
}
})

export const profile = createAsyncThunk("user/profile", async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post("http://localhost:3001/api/v1/user/profile", null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.body
    } catch (error) {
        throw new Error(error)
        console.log(error)
    }
})