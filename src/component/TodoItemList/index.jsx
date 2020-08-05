import React from 'react';
import { connect } from "react-redux";
import TodoItem from '../Item';
import { List } from 'antd';
class TodoItemList extends React.Component {
    render() {
        console.log(this.props.itemList)
        return (

            <List
                itemLayout="horizontal"
                dataSource={this.props.itemList}
                renderItem={(item, index) => (
                        <TodoItem item={item} index={index} key={index} />
                )}
            />
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
