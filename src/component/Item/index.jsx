import React from 'react';
import { connect } from "react-redux";
import todoApi from '../../Request';


class TodoItem extends React.Component {

    handleDelete = () => {
        let index = this.props.index;
        todoApi.delete(`/${this.props.item.id}`);
        this.props.deleteItem(index);
    }

    handleDone =() => {
        let index = this.props.index;
        todoApi.put(`/${this.props.item.id}`,{
            status: !this.props.item.status
        })
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


const mapStateToProps = state => {
    return { itemList: state.itemList.filter(item => item.status === true) };
}

const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({type:"delete",index:index}),
    doneItem: (index) => dispatch({type:'done',index:index})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);
