import React from 'react';
import { connect } from "react-redux";
import Axios from 'axios';

class TodoItem extends React.Component {

    handleDelete = () => {
        let index = this.props.index;
        this.props.deleteItem(index);
    }

    handleDone =() => {
        let index = this.props.index;
        Axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/'+this.props.item.id, { status: !this.props.item.status });
        this.props.doneItem(index);
    }

    render() {
        return (
            <div>
                <span onClick={this.handleDone} style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}>
                    {this.props.item.content}</span>
                 <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({type:"delete",index:index}),
    doneItem: (index) => dispatch({type:'done',index:index})
})

export default connect(null,mapDispatchToProps)(TodoItem);
