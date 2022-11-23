import {worldsPopApi} from "../api/api";

const SET_REGION = 'region/SET_REGION'
const SET_LOADING = 'region/SET_LOADING'

let initialState = {
    regions: [],
    loading: true
}

const regionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGION:
            return {
                ...state,
                regions: [...state.regions, {
                    region: action.region,
                    countries: action.countries
                }]
            }

        case SET_LOADING:
            return {...state, loading: action.loading}

        default:
            return state
    }
}
export default regionsReducer

const setRegion = (region, countries) => ({type: SET_REGION, region, countries})
const setLoading = (loading) => ({type: SET_LOADING, loading})

export const getRegion = (regionName) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const data = await worldsPopApi.getRegion(regionName)
        // сортируем и возвращаем первые 10 элементов (регионы с наибольшим населением)
        dispatch(setRegion(regionName, data.sort((a,b) => b.population - a.population).slice(0, 10)))
    } catch (error) {
        alert(error)
    } finally {
        dispatch(setLoading(false))
    }
}