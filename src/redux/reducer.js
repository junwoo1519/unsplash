const initialState = {
    popup: false,
}

export const Action = {
    Types: {
        UPDATE_STATE: "UPDATE_STATE",
        GET_LIST: "GET_LIST"
    },

    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            props
        }),

        getList: () => ({
            type: Action.Types.GET_LIST,
        })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }
    }
}

export default reducer;