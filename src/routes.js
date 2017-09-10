import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Users from 'users/users';

render((
	<Router history={ browserHistory }>
		<Route path=":gender" component={ Users } />
	</Router>
), document.getElementById('main'))