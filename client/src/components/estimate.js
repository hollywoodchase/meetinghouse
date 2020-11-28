import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/grid";
import { Name, Email, Balance, FormBtn } from "../components/form";
import { withRouter } from 'react-router';
import "../App.css";

class AddUser extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    balance: ""
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", email: "", balance: "" })
      )
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteuser(id)
      .then(res => this.loadusers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveUser({
        name: this.state.name,
        email: this.state.email,
        balance: this.state.balance
      })
        .then(
          res => {
            console.log(res)
            alert("User added!");
            this.loadUsers();
            this.props.history.push('/');
          }
        )
        .catch(err => console.log(err))
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form id="form">
              <Name
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Emo Chase"
              />
              <Email
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="crawdaddy@gmail.com"
              />
              <Balance
                value={this.state.balance}
                onChange={this.handleInputChange}
                name="balance"
                placeholder="$$$$$"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email && this.state.balance)}
                onClick={this.handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(AddUser);