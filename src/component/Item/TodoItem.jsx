import React from 'react';
import { connect } from "react-redux";

class TodoItem extends React.Component {

    handleDelete = () => {
        let index = this.props.index;
        this.props.deleteItem(index);
    }

    handleDone =() => {
        let index = this.props.index;
        this.props.doneItem(index);
    }

    render() {
        return (
            <div>
                <span onClick={this.handleDone} style={{ textDecorationLine: this.props.itemList[this.props.index].done ? 'line-through' : 'none' }}>{this.props.itemList[this.props.index].value}</span>
                 <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}



const mapStateToProps =  state => {
    return {itemList: state.itemList};
}

const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({type:"delete",index:index}),
    doneItem: (index) => dispatch({type:'done',index:index})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);
