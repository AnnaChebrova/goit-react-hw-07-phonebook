import React from 'react';
import styles from './feedback.module.css';
import Statistics from './Statistic';
import ButtonContainer from './BtnContainer';
import Notification from './Notification';


class Feedback extends React.Component {

    state = {
    good: 0,
    neutral: 0,
    bad: 0
    }

    TotalFeedback = () => {
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
        return totalFeedback;
    };

    FeedbackPositPerc = () => {
        const positPerc = Math.ceil((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100);
         return positPerc || 0;
    };
    
    handleIncrementGood = () => {
        this.setState(prevState => ({
                good: prevState.good +1,
            }));
         this.TotalFeedback();
    };

    handleIncrementNeutral = () => {
        this.setState(prevState => ({
                neutral: prevState.neutral +1,
            }));
            this.TotalFeedback();

    };

    handleIncrementBad = () => {
        this.setState(prevState => ({
                bad: prevState.bad +1,
            }));
            this.TotalFeedback();

    };

    render() {

            const totalFeedback = this.state.good + this.state.neutral + this.state.bad;

        return (
            <div>
            <section>
            <h1>Please leave feedback</h1>
            <ButtonContainer 
            onGood={this.handleIncrementGood}
            onNeutral={this.handleIncrementNeutral}
            onBad={this.handleIncrementBad}
            />
            </section>
            {!totalFeedback && <Notification message="No feedback given" /> }
            {!!totalFeedback && (
                 <section>
            <h2>Statistics</h2>
            <Statistics 
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.TotalFeedback()}
            positive={this.FeedbackPositPerc}
                />
                 </section>
            )
            }
            </div>
 )
};
}
export default Feedback;


