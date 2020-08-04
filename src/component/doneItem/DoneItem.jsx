import React from 'react';
import TodoItem from '../Item/TodoItem'
import { connect } from "react-redux";


class DoneItem extends React.Component {


    render() {

        console.log(this.props.itemList);
        return (

            <div>
                {
                    this.props.itemList.map((item, index) => <TodoItem key={index} item={item} index={index}/>)
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { itemList: state.itemList.filter(item => item.status === true) };
}



export default connect(mapStateToProps)(DoneItem);

