import { configureStore } from '@reduxjs/toolkit'

import DataSlice from './DataSlice';
import ModelSlice from './ModelSlice'

export const store = configureStore({
    reducer: {
        data: DataSlice,
        model: ModelSlice
    },
})

