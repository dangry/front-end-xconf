import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import componentStyle from './Competencies.style';
import Speaker from './competency/Speaker';


export class Speakers extends Component {

  render( ) {
    const { classes, speakers } = this.props;

    return (
      <div className={classes.root}>
        { speakers ? speakers.map( ( speaker ) => (
            <Speaker key={speaker.identifier} speaker={ speaker }/>
        ) ) : <h3>Sin resultados</h3>
        }
      </div>
    );
  }
}

Competencies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(componentStyle)(Speakers);