import React from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
`

const Element = styled.span`
  color: gray;
  &:not(:last-child):after {
    padding: 8px;
    content: "/";
  }
`

const Link = styled(RouterLink)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: lightblue;
  }
`

const Label = styled.span``

const Breadcrumb = ({ values }) => {
  return (
    <Wrapper>
      <Element>
        <Link to="/">Home</Link>
      </Element>
      {values.map((value) => (
        <Element key={value.label}>
          {value.link ? (
            <Link to={value.link}>{value.label}</Link>
          ) : (
            <Label>{value.label}</Label>
          )}
        </Element>
      ))}
    </Wrapper>
  )
}

Breadcrumb.propTypes = {
  values: PropTypes.array.isRequired,
}

export default Breadcrumb
