import React from 'react';
import TodoItem from '../Item'
import { connect } from "react-redux";
import { List } from 'antd';

class DoneItem extends React.Component {

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
    return { itemList: state.reducer.itemList.filter(item => item.status === true) };
}

export default connect(mapStateToProps)(DoneItem);

