import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

function App() {
  // <ul>から</ul>は後で削除する
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Quiz/'>Quiz</Link>
        </li>
      </ul>
      <Route path='/' exact component={Home} />
      <Route path='/Quiz/' exact component={Quiz} />
    </Router >
  );
}

export default App;