import React, { Component } from "react";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onChangeProfession = this.onChangeProfession.bind(this);
  }

  catchInput = (e) => {
    let user = this.state.user;
    let id = e.currentTarget.id;

    user[id] = e.currentTarget.value;
    this.setState({ user });
  };
  // onChangeName(e) {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // }
  // onChangeEmail(e) {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // }
  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value,
  //   });
  // }
  // onChangeProfession(e) {
  //   this.setState({
  //     profession: e.target.value,
  //   });
  // }
  submitForm = (e) => {
    e.preventDefault();

    localStorage.setItem("email", JSON.stringify(this.state.user.email));
    localStorage.setItem("password", JSON.stringify(this.state.user.password));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="jumbotron text-center">SIGN UP PAGE</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 col-md-6 col-md-offset-3 well well-lg">
            <form onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="fee">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.catchInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Email</label>
                <input
                  type="email"
                  className="form-control"
                  required
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.catchInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.catchInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fee">Profession</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="profession"
                  value={this.state.profession}
                  onChange={this.catchInput}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-success" type="submit">
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
