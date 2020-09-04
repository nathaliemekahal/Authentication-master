import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
      user: {},
    };
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
  }
  catchInput = (e) => {
    let user = this.state.user;
    let id = e.currentTarget.id;
    user[id] = e.currentTarget.value;
    this.setState({ user });
  };
  // onChangePassword(e){
  //   this.setState({
  //     password : e.target.value,
  //   })
  // }
  validateCredentials = (e) => {
    e.preventDefault();
    console.log("herrrree");
    var email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    console.log(email.slice(1, -1) + password.slice(1, -1));
    {
      this.state.user.email === email.slice(1, -1) &&
      this.state.user.password === password.slice(1, -1)
        ? this.setState({ authenticated: true }, () => {
            this.props.fn(this.state.authenticated);
          })
        : this.setState({ authenticated: false }, () => {
            this.props.fn(this.state.authenticated);
          });
    }
  };
  // onLogIn(e) {
  //   e.preventDefault();
  // }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="jumbotron text-center">LOGIN PAGE</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-10 col-md-6 col-md-offset-3 well well-lg">
              {/* <form
              onSubmit={() => {
                this.validateCredentials();
              }}
            > */}
              <div className="form-group">
                <label htmlFor="fee">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  // value={this.state.email}
                  onChange={this.catchInput}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  // value={this.state.password}
                  onChange={this.catchInput}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <button
                  onClick={this.validateCredentials}
                  className="btn btn-success"
                >
                  Login
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
