import React from "react";
import AuthForm from "components/AuthForm";
import {
  authService,
  githubAuth,
  googleAuth,
  signPopup,
} from "../fbase";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new googleAuth();
    } else if (name === "github") {
      provider = new githubAuth();
    }
    await signPopup(authService, provider);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name={"github"}>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
