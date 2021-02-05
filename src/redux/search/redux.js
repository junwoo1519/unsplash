const initialState = {
    total : undefined,
    total_pages : undefined,
    results: []
}

export const Action = {
    Types: {
        UPDATE_STATE: "SEARCH/UPDATE_STATE",
        SEARCH_PHOTOS: "SEARCH_PHOTOS"
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),

        searchPhotos: (payload) => ({
            type: Action.Types.SEARCH_PHOTOS,
            payload
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }
}

export default reducer;