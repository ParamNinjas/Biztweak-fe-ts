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
            const { payload } = param;
            state.allUserRecomendations = [...state.allUserRecomendations, payload];
        },
        setSelectedRecomendation: (state, param) => {
            const { payload } = param;
            state.selectedRecomendation = payload ;
        },
    }
    
});
const { actions, reducer } = recomendationSlice
export const { setAllUserRecomendations , setSelectedRecomendation} = actions;
export const selectRecomendationState = (state : any) => state;
export default reducer;