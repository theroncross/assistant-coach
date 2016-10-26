import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsList from '../components/resultslist';
import { fetchSelectedHeat } from '../middlewares';

class Review extends Component {
  render() {
    const { heats, selectedHeatResults, getSelectedHeat } = this.props;
    return (
      <main>
        <h1>Review</h1>
        <ul>
          {heats.map(heat => {
            return (
              <li key={heat} onClick={() =>getSelectedHeat(heat)}>
                {heat}
              </li>
            )}
          )}
        </ul>
        <ResultsList
          athletes={selectedHeatResults.athletes}
          times={selectedHeatResults.times}
        />
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    heats: state.review.heats,
    selectedHeatResults: state.review.selectedHeatResults }
}

const mapDispatchToProps = dispatch => {
  return { getSelectedHeat: (id) => dispatch(fetchSelectedHeat(id)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Review);