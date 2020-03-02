import React, { Component } from 'react';

class ToggleContent extends Component {
  state = {
    isContentDisplayed: false
  };
  render() {
    const { comment_count, newCommentNum } = this.props;
    const { isContentDisplayed } = this.state;
    return (
      <div>
        {isContentDisplayed === false ? (
          <button className="button" onClick={this.toggleVisibility}>
            {`See ${+comment_count + newCommentNum} Comments`}
          </button>
        ) : (
          <div>
            <button className="button" onClick={this.toggleVisibility}>
              {`Hide ${+comment_count + newCommentNum} Comments`}
            </button>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }

  toggleVisibility = event => {
    this.setState(currentState => {
      return { isContentDisplayed: !currentState.isContentDisplayed };
    });
  };
}

export default ToggleContent;
