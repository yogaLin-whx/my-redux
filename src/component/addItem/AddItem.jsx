import React from 'react';
import { connect } from "react-redux";
import TodoItemList from '../TodoItemList';
import todoApi from '../../Request'
import { Input } from 'antd';
class AddItem extends React.Component {
    handleAdd = (value) => {
        if (value !== '') {
            todoApi.post('', {
                content: value,
                status: false
            }).then((response) => {
                this.props.addItem(response.data.id,value);
            })
        } else {
            alert("input message should not be blank!");
        }
    }

    render() {
        return (<div>
            <div>
                <Input.Search size="large" enterButton="add" onSearch={value => this.handleAdd(value)} />
            </div>
            <br></br>
            <TodoItemList></TodoItemList>
        </div>
        )
    }
    //TODO:  async  await instead of .then
    //TODO: 不用_this，用箭头函数代替
    componentDidMount() {
        todoApi.get()
            .then((response) => {
                console.log(response);
                this.props.addItemList(response.data);
            })
    }
}



const mapStateToProps = state => {
    return { value: state.reducer.value, itemValue: state.reducer.itemValue, itemList: state.reducer.itemList};
}

const mapDispatchToProps = dispatch => ({
    addItem: (id,inputValue) => dispatch({ type: "add",id:id, content: inputValue }),
    addItemList: (data) => dispatch({ type: 'data', data: data })
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);