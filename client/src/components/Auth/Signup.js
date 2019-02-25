import React from 'react';

class Signup extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState ({
      [name]: value,
    });
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <div className="App">
        <h2 className="App">Signup</h2>
        <form className="form">
          <input onChange={ this.handleChange } value={username} type="text" name="username" placeholder="username" autoComplete="username" />
          <input onChange={ this.handleChange } value={email} type="text" name="email" placeholder="email" autoComplete="email" />
          <input onChange={ this.handleChange } value={password} type="password" name="password" placeholder="password"  autoComplete="new-password" />
          <input onChange={ this.handleChange } value={passwordConfirmation} type="password" name="passwordConfirmation" placeholder="password confirmation"  autoComplete="new-password" />
          <button type="submit" className="button-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup
