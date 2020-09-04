import React, { Component } from 'react'

const url = "https://www.breakingbadapi.com/api/characters";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      vote : 10,
    };
    
  }
  render() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          character: data,
        });
      });
    return (
      <div className="container">
        <div className="row">
          {this.state.character.map((item, key) => {
            return (
              <div
                className="col-12 col-md-5 col-md-offset-1 well well-lg d-flex"
                key={key}
              >
                <img
                  src={item.img}
                  alt="character"
                  width="100%"
                  height="450px"
                />
                <h3>Name : {item.name}</h3>
                <h4>Status : {item.status}</h4>
                <h4>Birthday : {item.birthday}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main
