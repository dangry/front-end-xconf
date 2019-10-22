import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { withStyles } from '@material-ui/core/styles';
import Speakers from '../speakers';
import componentStyle from './App.style';

class App extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <main>
            <Container>
                <Route path='/speakers' component={Speakers} />
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(componentStyle)(App);


