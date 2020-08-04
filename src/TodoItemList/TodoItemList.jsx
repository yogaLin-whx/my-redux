import React from 'react';
import { connect } from "react-redux";
import TodoItem from '../component/Item/TodoItem';

class TodoItemList extends React.Component {
    render() {
        var index = 0;

        return (
            <div>
                {
                    this.props.itemList.map(key => <TodoItem key={index} index={index++} />)
                }
            </div>
        )
    }
}



const mapStateToProps = state => {
    return { itemList: state.itemList };
}

const mapDispatchToProps = dispatch => ({
    deleteItem: () => dispatch({ type: "delete" })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemList);
