import React from 'react';
import TodoItem from '../Item/TodoItem'
import { connect } from "react-redux";


class DoneItem extends React.Component {


    render() {

        let index = 0;

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
    return { itemList: state.itemList.filter(item => item.status === true) };
}



export default connect(mapStateToProps)(DoneItem);

