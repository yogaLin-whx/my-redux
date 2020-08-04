const initialize ={
    value:'',
    itemValue:''
}

function reducer(state = initialize, action) {
    switch (action.type) {
        case 'add':
            return {itemValue:state.value,value:''}
    
        default:
            return state
    }
}

export default reducer;