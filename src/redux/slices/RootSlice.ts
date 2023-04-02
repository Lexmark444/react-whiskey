import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand",
        category: "Category",
        desc: "Desc",
        age: "Age",
        value: "Value",
    },
    reducers: {
        //action is submitted elsewhere - written to state.name
        chooseBrand: (state,action) => { state.brand = action.payload }, // All we are doing is setting the input to the state.name
        chooseCategory: (state,action) => { state.category = action.payload },
        chooseDesc: (state,action) => { state.desc = action.payload },
        chooseAge: (state,action) => { state.age = action.payload },
        chooseValue: (state,action) => { state.value = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const {chooseBrand, chooseCategory, chooseDesc, chooseAge, 
    chooseValue } = rootSlice.actions