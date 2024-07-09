import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import AuthOptions from "../../components/auth/AuthOptions";
import { FormElement, Input } from "../../styles/form";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserService from "../../services/UserService";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const SignInScreenWrapper = styled.section`
  .form-separator {
    margin: 32px 0;
    column-gap: 18px;

    @media (max-width: ${breakpoints.lg}) {
      margin: 24px 0;
    }

    .separator-text {
      border-radius: 50%;
      min-width: 36px;
      height: 36px;
      background-color: ${defaultTheme.color_purple};
      position: relative;
    }

    .separator-line {
      width: 100%;
      height: 1px;
      background-color: ${defaultTheme.color_platinum};
    }
  }

  .form-elem-text {
    margin-top: -16px;
    display: block;
  }
`;

const SignInScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const showToast = useToast();
  useEffect(() => {}, []);
  const handleSignIn = async () => {
    if (!username || !password) {
      toast.error("username/password is required");
      return;
    }
    try {
      const response = await UserService.getAccessToken(username, password);
      if (response !== undefined) {
        // showToast("test success");
        console.log(response);
        localStorage.setItem("access_token", response.accessToken);
        localStorage.setItem("refresh_token", response.refreshToken);
        navigate("/",  { state: { message: "login successfully" } });
      }
      setError(null); // Reset error if the request is successful
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 400) {
          // Handle bad request
          setError(error.response.data.message || "Bad Request");
        } else {
          setError("An unexpected error occurred");
        }
        console.error("Response error:", error.response);
        alert("email or password incorrect");
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response received from server");
        console.error("Request error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Error setting up request");
        console.error("Setup error:", error.message);
      }
    }
  };

  return (
    <>
      <SignInScreenWrapper>
        <FormGridWrapper>
          <Container>
            <div className="form-grid-content">
              <div className="form-grid-left">
                <img
                  src={staticImages.form_img1}
                  className="object-fit-cover"
                />
              </div>
              <div className="form-grid-right">
                <FormTitle>
                  <h3>Sign In</h3>
                </FormTitle>
                <AuthOptions />
                <div className="form-separator flex items-center justify-center">
                  <span className="separator-line"></span>
                  <span className="separator-text inline-flex items-center justify-center text-white">
                    OR
                  </span>
                  <span className="separator-line"></span>
                </div>

                <form>
                  <FormElement>
                    <label htmlFor="" className="form-elem-label">
                      User name or email address
                    </label>
                    <Input
                      type="text"
                      placeholder=""
                      name=""
                      className="form-elem-control"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </FormElement>
                  <PasswordInput
                    fieldName="Password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <Link
                    to="/reset"
                    className="form-elem-text text-end font-medium"
                  >
                    Forgot your password?
                  </Link>
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    className="form-submit-btn"
                    onClick={() => handleSignIn()}
                  >
                    Sign In
                  </Button>
                </form>
                <p className="flex flex-wrap account-rel-text">
                  Don&apos;t have a account?
                  <Link to="/sign_up" className="font-medium">
                    Sign Up
                  </Link>
                  `
                </p>
              </div>
            </div>
          </Container>
        </FormGridWrapper>
      </SignInScreenWrapper>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default SignInScreen;
