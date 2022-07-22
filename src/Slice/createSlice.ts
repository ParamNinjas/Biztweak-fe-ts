import { createSlice } from '@reduxjs/toolkit';
import {IRecomendationBase} from '../Interfaces/IRecomendation'
const recomendationSlice = createSlice({
    name: "Recomendations",
    initialState: {
        allUserRecomendations : [] as any,
        selectedRecomendation :{} 
    },
    reducers: {
        setAllUserRecomendations: (state, param) => {
            console.log('checking', state, param)
            const { payload } = param;
            state.allUserRecomendations = payload;
        },
        setSelectedRecomendation: (state, param) => {
            const { payload } = param;
            state.selectedRecomendation = payload ;
        },
        clearAllUserRecomendations: (state, param) => {
           
            state.allUserRecomendations = [];
        },
        clearSelectedRecomendation: (state, param) => {
           
            state.selectedRecomendation = {}
        },

    }
    
});
const { actions, reducer } = recomendationSlice
export const { setAllUserRecomendations , setSelectedRecomendation} = actions;
export const selectRecomendationState = (state : any) => state;
export default reducer;