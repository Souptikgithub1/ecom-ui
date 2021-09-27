import {ADD_CATEGORY, LOGIN, SET_CATEGORIES, SET_DRAWER_OPEN, SET_LOADING, SHOW_SNACK} from "../utils/StringConstants";

const appReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING: return {...state, isLoading: action.payload}

        case SET_DRAWER_OPEN: return {...state, isDrawerOpen: action.payload}

        case SET_CATEGORIES: return {...state, categories: action.payload}

        case ADD_CATEGORY:
            const categories = [...state.categories]
            categories.push(action.payload)
            return {...state, categories}

        case LOGIN: return {...state, user: action.payload}

        case SHOW_SNACK: return {...state, showSnack: action.payload}

        default: return {...state}
    }
}

export default appReducer