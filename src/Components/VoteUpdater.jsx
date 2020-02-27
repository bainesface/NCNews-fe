import React, { Component } from 'react';
import * as api from '../api';
import ErrorPage from './ErrorPage';

class VoteUpdater extends Component {
  state = {
    updatedVotes: 0,
    err: null
  };

  render() {
    const { votes } = this.props;
    const { updatedVotes, err } = this.state;

    return (
      <div className="articleVotes">
        {' '}
        <button
          onClick={() => {
            this.updateVotes(1);
          }}
          disabled={updatedVotes === 1}
        >
          <span role="img" aria-label="upArrow">
            👍
          </span>
        </button>{' '}
        <p className="voteCount">{votes + updatedVotes} </p>
        <button
          onClick={() => {
            this.updateVotes(-1);
          }}
          disabled={updatedVotes === -1}
        >
          {' '}
          <span role="img" aria-label="downArrow">
            <span role="img" aria-label="uparrow">
              👎
            </span>
          </span>
        </button>
        {err && <ErrorPage err={err} />}
      </div>
    );
  }
  updateVotes = voteCount => {
    const { article_id, comment_id } = this.props;

    this.setState(currentState => {
      return { updatedVotes: currentState.updatedVotes + voteCount };
    });
    api.updateVote(voteCount, comment_id, article_id).catch(err => {
      this.setState(currentState => {
        return {
          updatedVotes: currentState.updatedVotes - voteCount,
          err: { status: 500, data: { msg: 'Vote not counted' } }
        };
      });
    });
  };
}

export default VoteUpdater;
