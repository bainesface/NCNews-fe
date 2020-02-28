import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import ArticleById from './Components/ArticleById';
import Topics from './Components/Topics';
import { Router } from '@reach/router';
import ErrorPage from './Components/ErrorPage';
// import UsernameContextProvider from './Contexts/Username';

function App() {
  return (
    // <UsernameContextProvider>
    <main className="App">
      <Header />
      <Nav />
      <Router className="mainContent">
        <Articles path="/" />
        <ArticleById path="articles/:article_id" />
        <Topics path="/topics/:topic" />
        <ErrorPage
          default
          err={{ status: 404, data: { msg: 'URL Not Found' } }}
        />
      </Router>
    </main>
    // </UsernameContextProvider>
  );
}

export default App;
