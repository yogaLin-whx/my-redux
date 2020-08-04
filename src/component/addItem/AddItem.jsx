import React from 'react';
import { connect } from "react-redux";
import TodoItemList from '../../TodoItemList/TodoItemList';

class AddItem extends React.Component {
    
    handleAdd = () => {
        let inputValue = document.getElementById('input').value;
        if(inputValue!==''){
            this.props.addItem(inputValue);
        }else{
            alert("input message should not be blank!");
        }
    }


    render() {

        return (<div>
            <div>
                <input  id='input'  /> <button onClick={this.handleAdd}>Add</button>
            </div>
            <TodoItemList></TodoItemList>
        </div>
        )
    }

}

const mapStateToProps =  state => {
    return {value:state.value,itemValue:state.itemValue};
}

const mapDispatchToProps = dispatch => ({
    addItem: (inputValue) => dispatch({type:"add",value:inputValue})
})

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);