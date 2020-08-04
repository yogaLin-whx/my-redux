const initialize = {
    value: '',
    itemValue: ''
}

function reducer(state = initialize, action) {
    switch (action.type) {
        case 'add':
            return { itemValue: state.value }
        case 'delete':
            return { itemValue: '' }
        case 'inputChange':
            return { value: action.value }
        default:
            return state
    }
}

export default reducer;