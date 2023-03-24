// import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'

// const freelanceProfiles = [
//   {
//     name: 'Jane Doe',
//     jobTitle: 'Devops',
//   },
//   {
//     name: 'John Doe',
//     jobTitle: 'Developpeur frontend',
//   },
//   {
//     name: 'Jeanne Biche',
//     jobTitle: 'Développeuse Fullstack',
//   },
// ]

// const CardsContainer = styled.div`
//   display: grid;
//   gap: 24px;
//   grid-template-rows: 350px 350px;
//   grid-template-columns: repeat(2, 1fr);
// `

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const { theme } = useTheme()
  // const [freeLancersList, setFreelancersList] = useState({})
  // const [isDataLoading, setDataLoading] = useState(false)
  // const [error, setError] = useState(false)
  // const [freelancersList, setFreelancesList] = useState([])

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )
  const freelancersList = data?.freelancersList

  // useEffect(() => {
  //   async function fetchFreelances() {
  //     setDataLoading(true)
  //     try {
  //       const response = await fetch(`http://localhost:8000/freelances`)
  //       const { freelancersList } = await response.json()
  //       setFreelancesList(freelancersList)
  //     } catch (err) {
  //       console.log('===== error =====', err)
  //       setError(true)
  //     } finally {
  //       setDataLoading(false)
  //     }
  //   }
  //   fetchFreelances()
  // }, [])

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  // useEffect(() => {
  //   // fetchData()
  //   setDataLoading(true)
  //   fetch(`http://localhost:8000/freelances`).then((response) =>
  //     response.json().then((res) => {
  //       setFreelancersList(res)
  //       setDataLoading(false)
  //     })
  //   )
  // }, [])

  return (
    <div>
      {/* <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1> */}
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {/* {isDataLoading ? ( */}
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {/* {freeLancersList.map((profile, index) => ( */}
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
