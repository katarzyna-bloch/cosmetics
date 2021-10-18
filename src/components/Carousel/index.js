import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
  margin-bottom: ${props => (props.withBottomMargin ? '32px' : 0)};

  .slick-slider {
    width: 100%;
    max-width: calc(100vw - 50px);
  }

  .slick-arrow.slick-prev {
    left: 18px;
    z-index: 1;
  }
  .slick-arrow.slick-next {
    right: 18px;
    z-index: 1;
  }

  ${({ sideMargins }) => sideMargins && `
    .slick-list {
      margin-left: -${sideMargins}px;
      margin-right: -${sideMargins}px;
    }
    .slick-slide > div {
      padding-left: ${sideMargins}px;
      padding-right: ${sideMargins}px;
    }
  `};
`

const Slide = styled.div``

export const Carousel = ({ items, settings = {} }) => {
  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    draggable: false,
    gap: 0,
  }

  const dots = items.length < 10 ? settings.dots || defaultSettings.dots : false
  const gap = settings.gap || defaultSettings.gap

  return (
    <Container withBottomMargin={dots} sideMargins={gap / 2}>
      <Slider {...defaultSettings} {...settings} dots={dots}>
        {items.map((item, index) => (
          <Slide key={index}>
            {item}
          </Slide>
        ))}
      </Slider>
    </Container>
  )
}

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  settings: PropTypes.object.isRequired,
}

export default Carousel
