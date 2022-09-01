import thankyouSVG from './images/illustration-thank-you.svg';

const Sec: React.FunctionComponent<{ number: number }> = (props) => {
  return (
    <div className="App">
      <div className="thank__container">
        <div className="thankyou">
          <img src={thankyouSVG} alt="thank-you icon" />
        </div>
        <div className="rating">
          <p>You selected {props.number} out of 5</p>
        </div>
        <div className="thank-state">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sec;
