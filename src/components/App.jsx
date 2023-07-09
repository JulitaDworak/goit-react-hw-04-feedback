// import { Counter} from './Feedback/Feedback';
// import {LoginForm} from './learn/Learn';
// import { SignUpForm } from './learn/SignUp';
import React, {useState} from 'react'
import {Statistics} from './Statistics/Statistics'
import {Notification} from './Notification/Notification'


export function App () {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const [hasFeedback, setHasFeedbeck]= useState(false)

const total = good+bad+neutral
const positivePercentage = Math.round((good/total) *100) ||0;


function incrementCountGood () {
  setGood(good +1)
  setHasFeedbeck(true)
}
function incrementCountNeutral () {
  setNeutral(neutral +1)
  setHasFeedbeck(true)
}
function incrementCountBad () {
  setBad(bad +1)
  setHasFeedbeck(true)
}


  return (
<div class = "counter">
{hasFeedback ? true : <Notification/>}
<button onClick={incrementCountGood}>Good</button>
<button onClick={incrementCountNeutral}>Neutral</button>
<button onClick={incrementCountBad}>Bad</button>

{hasFeedback && total > 0 && (
        <div>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        </div>
      )}
    
    </div>
  )
}


// export class App extends Component {
//   static defaultProps = { 
//       step: 1,
//   }

//   state = {
//       good: 0,
//       neutral: 0,
//       bad: 0, 
//   }
  
// showFeedbackValue =(name) => {
//   this.setState(prevState => ({
//     [name] : prevState[name] +1
//   }))
// }
  
// countTotalFeedback = () => {
//       return this.state.good + this.state.neutral + this.state.bad
//       };

// countPositiveFeedbackPercentage = () => {
//   const {good} = this.state;
//   const total = this.countTotalFeedback();

// return Math.round((good/total) *100) ||0;


// };

//   render(){
//     return (
//       <div className={css.feedbackItem}> 
//       <Section title={'Please leave feedback'}>
//         <FeedbackOptions
//           options={Object.keys(this.state)}
//           onLeaveFeedback={this.showFeedbackValue}
//         />
//         {this.countTotalFeedback() ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Section>


//       </div>
//     );



//   }
// }
  


export default App