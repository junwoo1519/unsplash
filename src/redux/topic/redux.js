const initialState = {
    slugs: {
        results: []
    },

    slugPhotos: {
        results: []
    }
}

export const Action = {
    Types: {
        UPDATE_STATE: "TOPIC/UPDATE_STATE",
        GET_TOPIC_SLUG: "GET_TOPIC_SLUG",
        GET_TOPIC_PHOTO: "GET_TOPIC_PHOTO",
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),

        topicSlug: (payload) => ({
            type: Action.Types.GET_TOPIC_SLUG,
            payload
        }),

        topicPhoto: (payload) => ({
            type: Action.Types.GET_TOPIC_PHOTO,
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