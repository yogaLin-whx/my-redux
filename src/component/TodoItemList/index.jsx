import React from 'react';
import { connect } from "react-redux";
import TodoItem from '../Item';
import { List } from 'antd';
class TodoItemList extends React.Component {
    render() {
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
    return { itemList: state.reducer.itemList};
}

export default connect(mapStateToProps)(TodoItemList);
