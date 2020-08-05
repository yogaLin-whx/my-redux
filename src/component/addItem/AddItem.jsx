import React from 'react';
import { connect } from "react-redux";
import TodoItemList from '../TodoItemList';
import todoApi from '../../Request'


class AddItem extends React.Component {

    handleAdd = () => {
        let inputValue = document.getElementById('input').value;
        if (inputValue !== '') {
            todoApi.post('', {
                content: inputValue,
                status: false
            })
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
    componentDidMount() {
        const _this = this;
        todoApi.get()
            .then(function (response) {
                console.log(response);
                _this.props.addItemList(response.data);
            })
    }
}



const mapStateToProps = state => {
    return { value: state.value, itemValue: state.itemValue };
}

const mapDispatchToProps = dispatch => ({
    addItem: (inputValue) => dispatch({ type: "add", content: inputValue }),
    addItemList: (data) => dispatch({ type: 'data', data: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);