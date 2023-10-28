// Styles
import { Container, Owner, Load, BackButton } from "./styles" 

// Router
import { useParams } from "react-router-dom"

// Hooks
import { useEffect, useState } from "react"

// Service 
import api from "../../services/api"

// Icons
import { FaUserCircle, FaArrowLeft } from 'react-icons/fa'

const Repositorios = () => {
  const { repositorio } = useParams()

  const [repo, setRepo] = useState({})
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const load = async () => {
      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${repositorio}`),
        api.get(`/repos/${repositorio}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          }
        })
      ])

      setRepo(repoData.data)
      setIssues(issuesData.data)
      setLoading(false)
    }

    load()
    setLoading(false)

  }, [repositorio])

  if(loading) {
    return (
      <Load>
        <p>Carregando...</p>
      </Load>
    )
  }

  return (
    <Container>
      <BackButton to={'/'}>
        <FaArrowLeft color="#0D2636" size={30} />
      </BackButton>

      <Owner>
        {issues.length > 0 ? (
          <>
            <img src={`${repo.owner.avatar_url}`} alt={`Imagem do dono do repositório, ${repo.owner.login}`} />
            <h1>{repo.name}</h1>
            <p>repo.description</p>
          </>
        ) : (
          <>
            <FaUserCircle size={150} color="#0D2636" />
            <h1>Matheus Orozimbo</h1>
            <p>Desenvolvedor Front-EndDesenvolvedor Front-EndDesenvolvedor Front-EndDesenvolvedor Front-End</p>
          </>
        )}
      </Owner>
    </Container>
  )
}

export default Repositorios