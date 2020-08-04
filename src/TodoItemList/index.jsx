import React from 'react';
import { connect } from "react-redux";
import TodoItem from '../component/Item';

class TodoItemList extends React.Component {
    render() {
        console.log(this.props.itemList)
        return (
            <div>
                {
                    this.props.itemList.map((item,index) => <TodoItem  item={item}  index={index}  key={index}/>)
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
