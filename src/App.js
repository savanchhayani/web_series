import React from 'react';
import { connect } from 'react-redux';
import Home from './containers/Home';

function App(props) {
  return (
    <Home />
  );
}

const mapState = (state) => ({
  name: state.lists.name,
});

export default connect(mapState)(App);
