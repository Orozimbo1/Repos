// Styles
import { Container } from "./styles" 

// Router
import { useParams } from "react-router-dom"

// Hooks
import { useEffect, useState } from "react"

// Service 
import api from "../../services/api"

const Repositorios = () => {
  const { repoRoute } = useParams()

  const [repositorio, setRepositorio] = useState({})
  const [issues, setIssues] = useState([])
  const [load, setLoading] = useState(true)

  useEffect(() => {

    const load = async () => {
      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${repoRoute}`),
        api.get(`/repos/${repoRoute}/issues`, {
          params: {
            state: 'open',
            per_page: 5,
          }
        })
      ])

      setRepositorio(repoData.data)
      setIssues(issuesData.data)
      setLoading(false)
    }

    load()

  }, [repoRoute])

  return (
    <Container>
    </Container>
  )
}

export default Repositorios