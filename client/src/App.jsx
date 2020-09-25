import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import Home from './routes/Home';
import AddRestaurant from './components/AddRestaurant';
import NewRestaurant from './routes/NewRestaurant';

const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/restaurants/create' component={NewRestaurant} />
                <Route exact path='/restaurants/:id/update' component={UpdatePage} />
                <Route exact path='/restaurants/:id' component={RestaurantDetailPage} />
            </Switch>
        </Router>        
        </div>
}

export default App;

