// import React, { Component } from 'react';
import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    if (e === 'Good') {
      setGood(good + 1);
    } else if (e === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (e === 'Bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
      let total = good + neutral + bad;
    return total;
  };
  
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? (good / countTotalFeedback() * 100)
      : '0';
  };
  
    return (
      <div>
        <Section title='Please leave feedbacks'>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
             onLeaveFeedback={handleFeedback} />
        </Section>
      
        <Section title='Statistics'>

          {countTotalFeedback() 
        ? (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()} />)
        : (<Notification message="There is no feedback" />
          
        )}
        </Section>
         
        </div>
    )
};
  
// export class App extends Component {

// state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = e => {
//     if (e === 'Good') {
//       this.setState((prevState) => ({
//         good: prevState.good + 1,
//       }));
//     }
//     else if (e === 'Neutral') {
//       this.setState((prevState) => ({
//         neutral: prevState.neutral + 1,
//       }));
//     }
//     else if (e === 'Bad') {
//       this.setState((prevState) => ({
//         bad: prevState.bad + 1,
//       }));
//     }
//   };

//   countTotalFeedback = () => {
//     let total = this.state.good + this.state.neutral + this.state.bad
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.countTotalFeedback()
//       ? (this.state.good / this.countTotalFeedback() * 100)
//       : '0';
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div>
//         <Section title='Please leave feedbacks'>
//           <FeedbackOptions
//             options={['Good', 'Neutral', 'Bad']}
//              onLeaveFeedback={this.handleFeedback} />
//         </Section>
      
//         <Section title='Statistics'>

//           {this.countTotalFeedback() 
//         ? (<Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()} />)
//         : (<Notification message="There is no feedback" />
          
//         )}
//         </Section>
         
//         </div>
//     )
//   };
  
// };

// export default App



