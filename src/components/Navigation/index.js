import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import media from '../../utils/media'

const Nav = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  background-color: lavender;
  padding: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-right: 15px;
  }
`
const ContentLink = styled.div`
  ${media.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Link = styled(RouterLink)`
  padding-right: 30px;
  text-decoration: none;
  color: black;

  ${media.phone} {
    padding-right: 15px;
  }
`

const ContentForm = styled.form`
  ${media.tablet} {
    margin-top: 10px;
  }
`
const TextField = styled.input``
const Button = styled.button``

export const Navigation = ({ categories, history: { push } }) => {
  const [textField, setField] = useState('')

  const handleChange = (e) => {
    setField(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    push(`/search?q=${textField}`)
    setField('')
  }
  
  return (
    <Nav>
      <ContentLink>
        <Link to="/sale">Promocje</Link>
        {categories.map((category) => (
          <Link to={category.url} key={category.url}>
            {category.name}
          </Link>
        ))}
      </ContentLink>
      <ContentForm onSubmit={handleSubmit}>
        <TextField type="text" placeholder="znajdź produkt" value={textField} onChange={handleChange} />
        <Button type="submit">Szukaj</Button>
      </ContentForm>
    </Nav>
  )
}

Navigation.propTypes = {
  categories: PropTypes.array.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Navigation)
