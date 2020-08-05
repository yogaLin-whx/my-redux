const initialize = {
    loading:false
}

function loadingReducer(state = initialize, action) {
    switch (action.type) {
        case 'loading':
            console.log(action.payload.itemList);
            return {
                loading: action.payload.loading
            }
        default:
            return state
    }
}

export default loadingReducer;