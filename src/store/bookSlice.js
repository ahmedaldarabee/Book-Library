import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getBooks = createAsyncThunk('book/getBooks', async (_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI
    try{
        let request = await fetch("http://localhost:3005/books");
        let data = await request.json();        
        return data;
    }catch(error){
        return rejectWithValue(error.message);
    }
});

const bookSlice = createSlice({
    name:"book",
    initialState:{
        books:[],
        isLoading: false,
        error:null,
    },
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state, action) => {
            // loading page state 
            state.isLoading = true;
            state.error = null
        })

        builder.addCase(getBooks.fulfilled, (state, action) => {
            // show data section
            state.isLoading = false;
            state.books = action.payload;
        })

        builder.addCase(getBooks.rejected, (state, action) => {
            // handle error if happen
            state.isLoading = false;
            state.error = action.payload
        });
    }
});

export default bookSlice.reducer;