import React, { Component } from 'react';

class ToggleContent extends Component {
  state = {
    isContentDisplayed: false
  };
  render() {
    return (
      <div>
        <button className="button" onClick={this.toggleVisibility}>
          See Comments
        </button>
        {this.state.isContentDisplayed && <div>{this.props.children}</div>}
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
