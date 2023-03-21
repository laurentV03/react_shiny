import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const StyledButton = styled.span`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
`

const Balloon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: red;
  transform: scale(${({ size }) => size});
`

function Header() {
  const [size, setSize] = useState(1)

  return (
    <nav>
      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
      <StyledButton $isFullLink onClick={() => setSize(size + 0.1)}>
        Agrandir
      </StyledButton>
      <StyledButton $isFullLink onClick={() => setSize(size - 0.1)}>
        Diminuer
      </StyledButton>
      <Balloon size={size} />
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/survey/1">Questionnaire</StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
    </nav>
  )
}

export default Header
