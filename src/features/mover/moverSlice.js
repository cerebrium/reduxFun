import { createSlice } from '@reduxjs/toolkit';

export const moverSlice = createSlice({
    name: 'mover',
    initialState: {
        upDown: 0,
        leftRight: 0,
    },

    reducers: {
        up: (state, action) => {
            state.upDown = action.payload
        },

        left: (state, action) => {
            state.leftRight = action.payload
        },

    }
});

// give the update functions
export const { up, left} = moverSlice.actions;

// return the value of the state
export const findXLocation = state => state.mover.upDown;
export const findYLocation = state => state.mover.leftRight;

// delayed movement
export const moveXLocation = location => dispatch => {
    setTimeout(() => {
        dispatch(up(location))
    }, 1000);
};

// delayed y movement
export const moveYLocation = location => dispatch => {
    setTimeout(() => {
        dispatch(left(location))
    }, 1000);
};

export default moverSlice.reducer;