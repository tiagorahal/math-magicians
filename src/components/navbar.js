import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from '../pages/home';
import CalculatorLink from '../pages/calculatorLink';
import Quote from '../pages/quote';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <Router>
      <div className="navbar-component">
        <h1>Math Magicians</h1>
        <nav className="navbar">
          <ul className="navbar-list">
            {links.map((link) => (
              <li key={link.id} className="navbar-list-items">
                <NavLink to={link.path} activeClassName="active-link" exact>
                  {link.text}
                </NavLink>
                <span className="pipe-divisor"> | </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <CalculatorLink />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBar;
