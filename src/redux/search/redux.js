const initialState = {
    photos: {
        results: []
    },
    collections: {
        results: []
    },
    users: {
        results: []
    }
}

export const Action = {
    Types: {
        UPDATE_STATE: "SEARCH/UPDATE_STATE",
        SEARCH_PHOTOS: "SEARCH_PHOTOS",
        SEARCH_COLLECTIONS: "SEARCH_COLLECTIONS",
        SEARCH_USER: "SEARCH_USER"
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),

        searchPhotos: (payload) => ({
            type: Action.Types.SEARCH_PHOTOS,
            payload
        }),

        searchCollections: (payload) => ({
            type: Action.Types.SEARCH_COLLECTIONS,
            payload
        }),

        searchUsers: (payload) => ({
            type: Action.Types.SEARCH_USER,
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