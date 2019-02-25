import React from 'react';

import Error from '../Error';
import { Mutation } from 'react-apollo';
import { SINGUP_USER } from '../../queries';

const initialState = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

class Signup extends React.Component {
  
  state = { ...initialState };

  clearState = () => {
    this.setState({ ...initialState });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState ({
      [name]: value,
    });
  }

  handleSubmit = (e, signupUser) => {
    e.preventDefault();
    signupUser().then(({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.signupUser.token);
    });
    this.clearState();
  }

  validateForm = () => {
    const { username, email, password, passwordConfirmation } = this.state;
    const isInvalid = !username || !email || !password || !password === passwordConfirmation;
    return isInvalid;
  }


  componentDidMount() {
    this.validateForm();
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <Mutation 
          mutation={ SINGUP_USER }
          variables={{
            username,
            email,
            password,
            passwordConfirmation,
          }}>
          {(signupUser, { data, loading, error }) => {
            if (loading) return (<div>Loading...</div>);

            return (
              <form className="form" onSubmit={ event => this.handleSubmit(event, signupUser) }>
                <input onChange={ this.handleChange } value={username} type="text" name="username" placeholder="username" autoComplete="username" />
                <input onChange={ this.handleChange } value={email} type="text" name="email" placeholder="email" autoComplete="email" />
                <input onChange={ this.handleChange } value={password} type="password" name="password" placeholder="password"  autoComplete="new-password" />
                <input onChange={ this.handleChange } value={passwordConfirmation} type="password" name="passwordConfirmation" placeholder="password confirmation"  autoComplete="new-password" />
                <button type="submit" className="button-primary" disabled={ loading || this.validateForm() }>Submit</button>
                { error && <Error error={ error } /> }
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signup
