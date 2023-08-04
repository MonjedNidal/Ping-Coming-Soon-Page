import { useState } from "react";
import Logo from "../images/logo.svg";
import Illustration from "../images/illustration-dashboard.png";
function Main() {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (event) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { value } = event.target;
    setIsValidEmail(emailPattern.test(value));
  };
  const inputStyle = isValidEmail ? "" : "invalid";

  return (
    <div className="main d-flex flex-column">
      <img className="logo align-self-center my-5" src={Logo} alt="" />
      <h1>
        We are launching <span>soon!</span>
      </h1>
      <p> Subscribe and get notified</p>
      <form
        className="d-flex justify-content-center align-items-center"
        action="/"
      >
        <div className="col-sm-6">
          <div className="d-flex flex-column position-relative">
            <input
              className={` ${inputStyle}`}
              placeholder="Your email address.."
              type="text"
              name="emailInput"
              required
              onChange={handleInputChange}
            />
            {!isValidEmail && (
              <span className="errorMsg">
                Please provide a valid email address
              </span>
            )}
          </div>
        </div>
        <a className="col-sm-3 mainBtn" href="#">
          Notify Me
        </a>
      </form>

      <img className="illustration" src={Illustration} alt="" />
      <div className="d-flex flex-rows justify-content-center align-items-center">
        <div id="icon1" className="icon"></div>
        <div id="icon2" className="icon"></div>
        <div id="icon3" className="icon"></div>
      </div>
    </div>
  );
}

export default Main;
