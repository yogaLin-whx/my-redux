import React from 'react';
import { connect } from "react-redux";
import TodoItem from '../Item/TodoItem';

class AddItem extends React.Component {


    handleInputChange = e =>{
        var value = e.target.value;
        this.props.inputChange(value);
    }


    render() {

        return (<div>
            <div>
                <input onChange={this.handleInputChange}  /><button onClick={this.props.addItem}>Add</button>
            </div>
            <div>
               <TodoItem></TodoItem>
            </div>
        </div>
        )
    }

}

const mapStateToProps =  state => {
    return {value:state.value,itemValue:state.itemValue};
}

const mapDispatchToProps = dispatch => ({
    addItem: () => dispatch({type:"add"}),
    inputChange:(inputValue) => dispatch({type:"inputChange",value:inputValue})
})

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);