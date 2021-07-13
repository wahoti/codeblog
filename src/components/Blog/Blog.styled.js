import styled from 'styled-components'

export const StyledPostWrapper = styled.div`
  /* overflow-y: hidden;
  overflow-x: hidden; */
  padding: 0 16px;
  position: relative;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
`

export const StyledImgWrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const StyledImgBlurb = styled.div`
  justify-content: center;
  display: flex;
`

export const StyledImg = styled.img`
  max-height: 50vh;
  max-width: 100%;
  object-fit: cover;
`
