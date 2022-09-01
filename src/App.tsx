import './App.css';
import starSVG from './images/icon-star.svg';
import thankyouSVG from './images/illustration-thank-you.svg';

//  <!-- Rating state start -->

//   How did we do?

//   Please let us know how we did with your support request. All feedback is appreciated
//   to help us improve our offering!

//   1 2 3 4 5

//   Submit

//   <!-- Rating state end -->

//   <!-- Thank you state start -->

//   You selected <!-- Add rating here --> out of 5

//   Thank you!

//   We appreciate you taking the time to give a rating. If you ever need more support,
//   don’t hesitate to get in touch!

//   <!-- Thank you state end -->

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="star">
        <img src={starSVG} alt="star icon" />
      </div>

      <div className="rating-state">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="rating__numbers">
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
          <div className="number">4</div>
          <div className="number">5</div>
        </div>
      </div>
      <button>SUBMIT</button>
    </div>
  );
};

export default App;
