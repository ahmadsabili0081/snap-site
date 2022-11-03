import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonPrimary = styled.button`
  padding: 12px 30px;
  color: var(--color-text);
  border: none;
  outline: none;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  font-size: 17px;
  background-color: var(--black);
  font-family: 'Epilogue', sans-serif;
@media screen and (max-width:570px) {
  margin: 20px auto;
}
`;

function ButtonsPrimary(props) {
  return <ButtonPrimary type='button'>{props.buttonPrimary}</ButtonPrimary>
}
ButtonsPrimary.propTypes = {
  buttonPrimary: PropTypes.string,
}
export default ButtonsPrimary
