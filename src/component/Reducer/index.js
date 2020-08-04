const initialize = {
    itemList: []
}

function reducer(state = initialize, action) {
    console.log("acto:" + action.index);
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
        default:
            return state
    }
}

export default reducer;