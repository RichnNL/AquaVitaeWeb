import React from 'react';
import StyledButton from '../../styles/StyledButton';

interface Props {

}

export class AVButton extends React.PureComponent<Props> {
    render() {
      
      return (
        <StyledButton type='primary' btnSize='medium' >Hello World</StyledButton>
      );
    }
  }