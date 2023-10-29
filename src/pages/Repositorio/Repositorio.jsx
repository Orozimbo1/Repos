// Styles
import { Container, Owner, Load, BackButton, IssuesList, PageActions, IssuesFilter } from "./styles" 

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
  const [page, setPage] = useState(1)
  const [state, setState] = useState('all')

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

  useEffect(() => {

    const loadIssue = async () => {

      const response = await api.get(`repos/${repositorio}/issues`, {
        params: {
          state,
          page,
          per_page: 5,
        }
      })

      setIssues(response.data)
    }

    loadIssue()

  }, [page, state])

  const handlePage = (action) => {
    setPage(action === 'back' ? page - 1 : page + 1)
  }
  

  if(loading & issues.length <= 0) {
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
        {issues.length > 0 && (
          <>
            <img src={`${repo.owner.avatar_url}`} alt={`Imagem do dono do repositório, ${repo.owner.login}`} />
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
          </>
        )}
      </Owner>

      {issues.length > 0 && (
        <>
          <IssuesList>
            <IssuesFilter>
              <button 
                type="button"
                onClick={() => setState('all')}
                disabled={state === 'all'}
              >
                Todas
              </button>
              <button 
                type="button"
                onClick={() => setState('open')}
                disabled={state === 'open'}
              >
                Abertas
              </button>
              <button 
                type="button"
                onClick={() => setState('closed')}
                disabled={state === 'closed'}
              >
                Fechadas
              </button>
            </IssuesFilter>

            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={`Foto do usuário ${issue.user.login}`} />

                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>

                    <div>
                      {issue.labels.map(label => (
                        <span key={String(label.id)}>{label.name}</span>
                      ))}
                    </div>
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssuesList>

          <PageActions>
            <button 
              type="button" 
              onClick={() => handlePage('back')}
              disabled={page < 2}
            >
              Voltar
            </button>
            <button type="button" onClick={() => handlePage('next')}>
              Próxima
            </button>
          </PageActions>
        </>
      )}
    </Container>
  )
}

export default Repositorios