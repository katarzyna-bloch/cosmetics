import styled from 'styled-components'
import media from '../../utils/media'

const ContentHeader = styled.h5`
  font-size: 20px;
  text-align: center;

  ${media.phone} {
    padding: 2px;
  }
`

export default ContentHeader
