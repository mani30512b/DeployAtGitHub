import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';
import './LoginSignup.css';

function LoginSignup() {
  return (
    <div className="container">
      <div>
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Enter Username" />
        </div>

        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Enter Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Enter Password" />
        </div>
      </div>

      <div className="forgot-password">
        Lost Password? <span>Click Here</span>
      </div>

      <div className="submit-container">
        <button className="submit">Sign Up</button>
        <button className="submit">Login</button>
      </div>
    </div>
  );
}

export default LoginSignup;
