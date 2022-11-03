import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'


const ButtonStyles = styled.button`
    padding: 12px 20px;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 1.1px;
    margin: 0px 5px;
    font-family: 'Epilogue', sans-serif;
`;

function ButtonHeader(props) {
  return <ButtonStyles className={props.class} type='button' buttons='Login'>{props.buttons}</ButtonStyles>

}
ButtonHeader.propTypes = {
  buttons: PropTypes.string,
  class: PropTypes.string,
}
export default ButtonHeader
