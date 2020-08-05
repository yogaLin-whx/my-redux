import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddItem from '../addItem/AddItem';
import DoneItem from '../doneItem/DoneItem';

class Menu extends React.Component {


    render() {

        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">to do item</Link>
                        </li>
                        <li>
                            <Link to="/done">done item</Link>
                        </li>
                    </ul>
                    <Route  path="/done" component={DoneItem}>
                    </Route>
                    <Route exact path="/" component={AddItem}>
                    </Route>
                </div>
            </Router>

        )
    }
}



export default Menu;

