import {configureStore} from '@reduxjs/toolkit'

import ConnectSlice from './slice/Connect.slice'
import ProfilSlice from './slice/Profil.slice'
import EditeprofilSlice from './slice/Editeprofil.slice'

export const store = configureStore({
    reducer: {
        connect: ConnectSlice,
        profil: ProfilSlice,
        editeprofil: EditeprofilSlice
    }
})