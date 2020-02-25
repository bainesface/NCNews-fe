import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import ArticleById from './Components/ArticleById';
import Topics from './Components/Topics';
import { Router } from '@reach/router';

function App() {
  return (
    <main className="App">
      <Header />
      <Nav />
      <Router>
        <Articles path="/articles" />
        <ArticleById path="/articles/:article_id" />
        <Topics path="/topics/:topic" />
      </Router>
    </main>
  );
}

export default App;
