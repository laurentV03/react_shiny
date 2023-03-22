import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import DefaultPicture from '../../assets/profile.png'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
  padding-left: 15px;
`
const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  background-color: ${(props) => (props.title === 'John Doe' ? 'blue' : 'red')};
`
const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, picture, title }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle title={title}>{title}</CardTitle>
    </CardWrapper>
  )
}

// function Card({ label, title, picture }) {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
//       <CardLabel>{label}</CardLabel>
//       <CardImage src={picture} alt="freelance" height={80} width={80} />
//       <span>{title}</span>
//     </div>
//   )
// }

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
