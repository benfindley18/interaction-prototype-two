import React, { Component } from 'react';
import PasswordStrength from '../src/component/PasswordStrength';
import '../src/component/PasswordStrength.scss'

class App extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
    }
  }

  render() {
    const { password } = this.state;
    return (
      <div className="App">
        <div className="meter">
          <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
          <PasswordStrength password={password} />
        </div>
      </div>
    );
  }
}

export default App;