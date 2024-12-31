import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    keyword: "",
};

export const DataSlice = createSlice({
    name: 'Data',
    initialState,
    reducers: {
        //yeni ürün ekleme
        createDataFunction: (state, action) => {
            state.data = [...state.data, action.payload];
        },
        // artan azalan olarak değiştirme
        sortingDataFunction: (state, action) => {
            state.data = [...state.data.sort((a, b) => action.payload === "asc" ? a.price - b.price : action.payload === "desc" ? b.price - a.price : null)];
        },
        // ürünü silme
        deleteDataFunction: (state, action) => {
            state.data = [...state.data.filter(dt => dt.id != action.payload)];
        },
        // arama 
        searchDataFunction: (state, action) => {
            state.keyword = action.payload;
        },
        // ürünü güncelleme
        updateDataFunction: (state, action) => {
            const itemExists = state.data.some(dt => dt.id === action.payload.id);
            if (!itemExists) {
                console.error(`Item with ID ${action.payload.id} not found!`);
                return;
            }
            state.data = state.data.map(dt =>
                dt.id === Number(action.payload.id) ? { ...dt, ...action.payload } : dt
            );

            console.log("Updated state:", state.data);
        }

    },
});

// Action creators are generated for each case reducer function
export const { createDataFunction, deleteDataFunction, updateDataFunction, sortingDataFunction, searchDataFunction } = DataSlice.actions;

export default DataSlice.reducer;
