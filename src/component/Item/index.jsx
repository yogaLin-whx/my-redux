import React from 'react';
import { connect } from "react-redux";
import todoApi from '../../Request';
import { Button, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
class TodoItem extends React.Component {

    handleDelete = () => {
        let index = this.props.index;
        todoApi.delete(`/${this.props.item.id}`).then(response=>{
            this.props.deleteItem(index);
        });
        
    }

    handleDone = () => {
        let index = this.props.index;
        todoApi.put(`/${this.props.item.id}`, {
            status: !this.props.item.status
        })
        this.props.doneItem(index);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={14} >
                        <span onClick={this.handleDone} style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}>
                        {this.props.item.content}</span>
                    </Col>
                    <Col span={6}>
                    </Col>
                    <Col span={4}>
                        <Button type="primary" danger shape="circle" icon={<DeleteOutlined />} onClick={this.handleDelete}></Button>
                    </Col>
                </Row>
               <br></br>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return { itemList: state.reducer.itemList.filter(item => item.status === true) };
}

const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch({ type: "delete", index: index }),
    doneItem: (index) => dispatch({ type: 'done', index: index })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
