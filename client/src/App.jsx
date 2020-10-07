import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import Home from './routes/Home';
import NewRestaurant from './routes/NewRestaurant';

const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/restaurants/create' component={NewRestaurant} />
                <Route exact path='/restaurants/:id' component={RestaurantDetailPage} />
                <Route exact path='/restaurants/:id/update' component={UpdatePage} />
            </Switch>
        </Router>        
        </div>
}

export default App;

