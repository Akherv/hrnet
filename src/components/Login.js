import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Login = (props) => {
  let navigate = useNavigate();
  const valid = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) {
      return navigate("/newemployee");
    }
  };

  return (
    <LoginContainer>
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </InputWrapper>
        <InputRemember>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </InputRemember>
        <SignInButtonContainer>SignIn</SignInButtonContainer>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  & label {
    font-weight: bold;
  }
  & input {
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px solid #131c38;
  }
`;

const InputRemember = styled.div`
  display: flex;
  & label {
    margin-left: 0.25rem;
  }

  & input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const SignInButtonContainer = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #131c38;
  background-color: #1d3354;
  border-radius: 5px;
  color: #fff;
`;
