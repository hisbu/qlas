//function
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Landing from './pages/landing'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './redux/reducers'

// styling component
import './index.css';
import './App.css'
import './App.scss'
import './supports/flaticon/flaticon.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'typeface-raleway'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
