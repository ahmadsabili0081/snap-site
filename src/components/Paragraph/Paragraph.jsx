import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ParagraphStyles = styled.p`
  color:var(--gray);
  font-family: 'Epilogue', sans-serif;
  font-size: 17px;
  line-height: 1.5;
  margin: 10px 0px;
  @media screen and (max-width:570px) {
    text-align: center;
  }
`;

function Paragraph(props) {
  return <ParagraphStyles>{props.text}</ParagraphStyles>
}
Paragraph.propTypes = {
  text: PropTypes.string,
}
export default Paragraph
