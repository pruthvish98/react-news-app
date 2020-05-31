import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import NewsDetailPage from './pages/NewsDetailPage';
import SearchAppBar from './components/header/HeaderM';
import 'aos/dist/aos.css';
function App() {
  return (
    <Router>
      <SearchAppBar />
      <div className="App">

        <Switch>
          <Route path="/top-headlines" component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/news-detail" component={NewsDetailPage} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
