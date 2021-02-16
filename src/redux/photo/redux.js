const initialState = {
    list: {
        results:[]
    },
    TopPhoto: {
    }
}

export const Action = {
    Types: {
        UPDATE_STATE: "PHOTO/UPDATE_STATE",
        GET_PHOTOS: "GET_PHOTOS",
        GET_PHOTO: "GET_PHOTO",
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