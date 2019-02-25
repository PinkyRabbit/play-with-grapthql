import React from 'react';

import Error from '../Error';
import { Mutation } from 'react-apollo';
import { SINGIN_USER } from '../../queries';

const initialState = {
    username: '',
    password: '',
  };

class Signin extends React.Component {
  
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

  handleSubmit = (e, signinUser) => {
    e.preventDefault();
    signinUser().then(({ data }) => {
      console.log(data);
      localStorage.setItem('token', data.signinUser.token);
    });
    this.clearState();
  }

  validateForm = () => {
    const { username, password } = this.state;
    const isInvalid = !username || !password;
    return isInvalid;
  }


  componentDidMount() {
    this.validateForm();
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <Mutation 
          mutation={ SINGIN_USER }
          variables={{
            username,
            password,
          }}>
          {(signinUser, { data, loading, error }) => {
            if (loading) return (<div>Loading...</div>);

            return (
              <form className="form" onSubmit={ event => this.handleSubmit(event, signinUser) }>
                <input onChange={ this.handleChange } value={username} type="text" name="username" placeholder="username" autoComplete="off" />
                <input onChange={ this.handleChange } value={password} type="password" name="password" placeholder="password"  autoComplete="off" />
                <button type="submit" className="button-primary" disabled={ loading || this.validateForm() }>Log In</button>
                { error && <Error error={ error } /> }
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signin;
