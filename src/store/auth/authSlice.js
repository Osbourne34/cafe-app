import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async ({ whoLogin, body }, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `http://bgcafe.herokuapp.com/api/${whoLogin}/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify(body),
                }
            );

            if (!response.ok) {
                throw new Error('Ошибка');
            }

            const data = await response.json();

            if (data === -1) {
                throw new Error('Вы ввели неправильный name или password');
            }

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchLogin.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.user = {
                email: action.payload.admin.email,
                role: action.payload.admin.role,
            };
            state.token = action.payload.token;
            state.loading = false;
            state.error = null;
        },
        [fetchLogin.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
