const initialize = {
    value: '',
    itemValue: '',
    itemList: []
}

function reducer(state = initialize, action) {
    console.log("acto:" + action.index);
    switch (action.type) {
        case 'add':
            return { itemList: [...state.itemList, { value: action.value, done: false }] }
        case 'delete':
            return { itemList: state.itemList.filter((item, index) => index !== action.index) }
        case 'done':
            return {itemList:state.itemList.map((item, index) =>{
                if(index === action.index){
                    item.done = !item.done;
                }
                return item;
            } )}
        default:
            return state
    }
}

export default reducer;