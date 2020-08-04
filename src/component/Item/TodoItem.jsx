import React from 'react';
import { connect } from "react-redux";

class TodoItem extends React.Component {

    render() {
        return (
            <div>
                {this.props.itemValue} <button onClick={this.props.deleteItem}>delete</button>
            </div>
        )
    }
}



const mapStateToProps =  state => {
    return {itemValue:state.itemValue};
}

const mapDispatchToProps = dispatch => ({
    deleteItem: () => dispatch({type:"delete"})
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);
