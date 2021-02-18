const initialState = {
    listRelated: {
        results: []
    },
}

export const Action = {
    Types: {
        UPDATE_STATE: "COLLECTION/UPDATE_STATE",
        COLLECTION_RELATED: "COLLECTION_RELATED",
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),

        collectionRelated: (payload) => ({
            type: Action.Types.COLLECTION_RELATED,
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