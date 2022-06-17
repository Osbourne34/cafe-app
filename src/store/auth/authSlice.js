import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

export const fetchAdminLogin = createAsyncThunk(
    'auth/fetchAdminLogin',
    async (body, { rejectWithValue }) => {
        try {
            const response = await fetch(
                'http://bgcafe.herokuapp.com/api/admin/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                },
            );

            const data = await response.json();

            if (data === -1) {
                throw new Error('Неправильные данные');
            }

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAdminLogin.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchAdminLogin.fulfilled]: (state, action) => {
            state.user = {
                email: action.payload.admin.email,
                role: action.payload.admin.role,
            };
            state.loading = false;
        },
        [fetchAdminLogin.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
