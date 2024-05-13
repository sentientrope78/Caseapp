import React from 'react';

function SignInButton() {
  const handleSignInClick = (event) => {
    event.preventDefault();
    // Example: Navigate to another page or handle sign-in logic
    window.location.href = 'http://stackoverflow.com/';
  };

  return (
    <button id="SignIn" onClick={handleSignInClick}>
      Sign In
    </button>
  );
}

export default SignInButton;
