import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TitleStyles = styled.h1`
  font-family: 'Epilogue', sans-serif;
@media screen and (max-width:570px) {
    text-align: center;
    font-size: 30px;
  }
`

function Titles(props) {
  return <TitleStyles>{props.title}</TitleStyles>
}
Titles.propTypes = {
  title: PropTypes.string,
}
export default Titles
