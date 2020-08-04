const initialize = {
    value: '',
    itemValue: '',
    itemList:[]
}

function reducer(state = initialize, action) {
    console.log("acto:"+action.index);
    switch (action.type) {
        case 'add':
            return {itemList:[...state.itemList,{value: action.value}]}
        case 'delete':
            return {itemList:state.itemList.filter((item,index) => index !== action.index)  }
        default:
            return state
    }
}

export default reducer;