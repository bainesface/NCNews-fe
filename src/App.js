import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Articles from './Components/Articles';
import ArticleById from './Components/ArticleById';
import Topics from './Components/Topics';
import UserPage from './Components/UserPage';
import { Router } from '@reach/router';
import ErrorPage from './Components/ErrorPage';
import UsernameContextProvider from './Contexts/Username';

function App() {
  return (
    <main className="App">
      <UsernameContextProvider>
        <Header />
        <Nav />
        <Router className="mainContent">
          <Articles path="/" />
          <ArticleById path="articles/:article_id" />
          <Topics path="/topics/:topic" />
          <UserPage path="/users/:username" />
          <ErrorPage
            default
            err={{ status: 404, data: { msg: 'URL Not Found' } }}
          />
        </Router>
      </UsernameContextProvider>
    </main>
  );
}

export default App;
