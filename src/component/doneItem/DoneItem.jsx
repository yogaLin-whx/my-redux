import React from 'react';
import TodoItem from '../Item/TodoItem'
import { connect } from "react-redux";


class DoneItem extends React.Component {


    render() {
       
           
                // const doneArray = this.props.itemList.fliter(item => item.done === true);
                let index = 0;
           

        return (
            
            <div>
                {
                    this.props.itemList.map(key => <TodoItem key={index} index={index++}/>)
                }
            </div>
        )
    }
}

const mapStateToProps =  state => {
    return {itemList: state.itemList.filter(item => item.done === true)};
}



export default connect(mapStateToProps)(DoneItem);

