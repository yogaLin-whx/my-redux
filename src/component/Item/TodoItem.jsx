import React from 'react';
import { connect } from "react-redux";

class TodoItem extends React.Component {

    handleDelete = () => {
        let index = this.props.index;
        console.log("delete"+index);
        this.props.deleteItem(index);
    }

    render() {
        return (
            <div>
                {this.props.itemList[this.props.index].value} <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}



const mapStateToProps =  state => {
    return {itemList: state.itemList};
}

const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({type:"delete",index:index})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);
