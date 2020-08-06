import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddItem from '../addItem/AddItem';
import DoneItem from '../doneItem/DoneItem';
import { Menu } from 'antd';
import '../../App.css'
class ItemMenu extends React.Component {

    render() {

        return (
            <Router>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link to="/" className='App'>To do item</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/done" className='App'>Done item</Link>
                    </Menu.Item>
                </Menu>
                <Route exact path="/done" component={DoneItem}>
                </Route>
                <Route exact path="/" component={AddItem}>
                </Route>
            </Router>
        )
    }
}



export default ItemMenu;

