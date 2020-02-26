import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import ArticleById from './Components/ArticleById';
import Topics from './Components/Topics';
import { Router } from '@reach/router';
import ErrorPage from './Components/ErrorPage';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <main className="App">
      <Header />
      <Nav />
      <Router>
        <Articles path="/" />
        <ArticleById path="articles/:article_id" />
        <Topics path="/topics/:topic" />
        <LoginPage path="/login" />
        <ErrorPage
          default
          err={{ status: 404, data: { msg: 'URL Not Found' } }}
        />
      </Router>
    </main>
  );
}

export default App;
