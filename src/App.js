import logo from './logo.svg';
import './App.css';
import './customStyles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Authenticator
          components={{
            SignIn: {
              Header() {
                return <div className="auth-header">Sign In</div>;
              },
              Footer() {
                return <div className="auth-footer">Footer content here</div>;
              },
              FormFields() {
                return (
                  <div className="auth-container">
                    <Authenticator.SignIn.FormFields />
                  </div>
                );
              },
              SignInButton() {
                return (
                  <button className="auth-button">
                    Sign In
                  </button>
                );
              },
            },
          }}
        >
          {({ signOut, user }) => (
            <div>
              <h2>Welcome, {user.username}!</h2>
              <button className="sign-out-button" onClick={signOut}>Sign out</button>
              <h2> just testing .............monkey..</h2>
            </div>
          )}
        </Authenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
