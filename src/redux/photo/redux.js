const initialState = {
    list: {
        results: []
    },
    topPhoto: {
        results: []
    },
    relatedPhoto: {
        results: []
    }
}

export const Action = {
    Types: {
        UPDATE_STATE: "PHOTO/UPDATE_STATE",
        GET_PHOTOS: "GET_PHOTOS",
        GET_PHOTO: "GET_PHOTO",
        GET_RELATED_PHOTOS: "GET_RELATED_PHOTOS",
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),

        getPhotos: (payload) => ({
            type: Action.Types.GET_PHOTOS,
            payload
        }),

        getPhoto: (payload) => ({
            type: Action.Types.GET_PHOTO,
            payload
        }),

        getRelatedPhotos: (payload) => ({
            type: Action.Types.GET_RELATED_PHOTOS,
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