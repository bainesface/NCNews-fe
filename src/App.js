import React from 'react';
import './App.css';
import Header from './Components/Header';
import Articles from './Components/Articles';
import ArticleById from './Components/ArticleById';
import { Router } from '@reach/router';

function App() {
  return (
    <main className="App">
      <Header />
      <Router>
        <Articles path="/articles" />
        <ArticleById path="/articles/:article_id" />
      </Router>
    </main>
  );
}

export default App;
