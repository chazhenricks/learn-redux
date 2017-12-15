//Import React tooling
import React from 'react';
import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

//Import components
import Main from './components/Main.js';
import Single from './components/Single.js';
import Photogrid from './components/Photogrid.js';

//Import react router deps
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Photogrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>

);

render(router, document.getElementById("root"));
