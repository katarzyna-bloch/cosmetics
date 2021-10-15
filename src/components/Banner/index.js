import styled from 'styled-components'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import media from '../../utils/media'
import { getImageBannersPath  } from '../../utils/images'

const Link = styled(RouterLink)`
  text-decoration: none;
  color: black;
`

const Wrapper = styled.div`
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`

const Text = styled.div`
  font-family: cursive;
  font-weight: 600;
  font-size: 25px;
  position: absolute;
  background-color: whitesmoke;
  padding: 2px;
  bottom: 30px;
  left: 0;
  right: 0;
  text-align: center;
  margin: 20px;
 
  ${media.tablet} {
    margin: 10px;
    font-size: 20px;
  }
`

export const Banner = ({ banner: { img, url, text } }) => (
  <Wrapper>
    <Link to={url}>
      <Image src={getImageBannersPath(img)} alt="banners" />
      <Text>{text}</Text>
    </Link> 
  </Wrapper>
)

Banner.propTypes = {
  banner: PropTypes.shape({
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
}

export default Banner
