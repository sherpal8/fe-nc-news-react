import React, { Component } from "react";
import * as api from "../../utils/api.js";
import PropTypes from "prop-types";

class Votes extends Component {
  state = { voteChange: 0, err: null };
  render() {
    const { votes } = this.props;
    const { voteChange, err } = this.state;
    return (
      <div>
        {err && <p>Oops, error. Please try again.</p>}
        <div>
          <p>Votes: {votes + voteChange}</p>
        </div>
        <div>
          <button
            onClick={() => {
              this.voteFunction(1);
            }}
            disabled={voteChange === 1}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.voteFunction(-1);
            }}
            disabled={voteChange === -1}
          >
            -
          </button>
        </div>
      </div>
    );
  }
  voteFunction = incrementValue => {
    const { id, section } = this.props;
    this.setState({ voteChange: incrementValue });
    api.voteChanger(id, incrementValue, section).catch(err => {
      this.setState(state => ({
        err,
        voteChange: state.voteChange - incrementValue
      }));
    });
  };
}

Votes.propTypes = {
  votes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired
};

export default Votes;
