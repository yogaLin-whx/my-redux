const initialize = {
    itemList: [],
    loading: false
}

function reducer(state = initialize, action) {
    switch (action.type) {
        case 'add':
            return { itemList: [...state.itemList, { content: action.content, status: false }] }
        case 'delete':
            return { itemList: state.itemList.filter((item, index) => index !== action.index) }
        case 'done':
            return {
                itemList: state.itemList.map((item, index) => {
                    if (index === action.index) {
                        item.status = !item.status;
                    }
                    return item;
                })
            }
        case 'data':
            return {
                itemList: action.data.map((item, index) => {
                    return item;
                })
            }
        default:
            return state
    }
}

export default reducer;