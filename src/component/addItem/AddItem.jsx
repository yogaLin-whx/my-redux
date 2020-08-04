import React from 'react';
import { connect } from "react-redux";
import TodoItemList from '../../TodoItemList';
import axios from 'axios';

class AddItem extends React.Component {

    handleAdd = () => {
        let inputValue = document.getElementById('input').value;
        if (inputValue !== '') {
            this.props.addItem(inputValue);
        } else {
            alert("input message should not be blank!");
        }
    }


    render() {

        return (<div>
            <div>
                <input id='input' /> <button onClick={this.handleAdd}>Add</button>
            </div>
            <TodoItemList></TodoItemList>
        </div>
        )
    }
     componentDidMount(){
        const _this = this;
        axios.get('https://5e9ec500fb467500166c4658.mockapi.io/todos')
        .then(function (response) {
            _this.props.addItemList(response.data);
        })
    }
}



const mapStateToProps = state => {
    return { value: state.value, itemValue: state.itemValue };
}

const mapDispatchToProps = dispatch => ({
    addItem: (inputValue) => dispatch({ type: "add", content: inputValue }),
    addItemList: (data) => dispatch({type:'data', data:data})
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);