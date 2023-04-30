import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends Component {
  
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good:this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  }

  onGetFeedback = (value) => {
    this.setState((prevState) => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`
      : `0%`;
  };

  render() {
    const names = Object.keys(this.state);
    const options = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
              onLeaveFeedback={this.onGetFeedback}
              names={names}
            />
      </Section>
      <Section>
           {total ? (
            <Statistics
              options={options}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        </div>
    );
  }
};

export default App;