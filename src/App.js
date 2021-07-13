import React, { Component } from "react";
import Container from "./Components/Container";
import Form from "./Components/Form";
import ContactsList from "./Components/ContactsList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Filter from "./Components/Filter";

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  render() {
    return (
      <Container>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.items,
});

export default connect(mapStateToProps)(App);
