// Styles
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles"

// Icons
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'

// Hooks
import { useState, useCallback } from "react"

// Router
import { Link } from "react-router-dom"

// services
import api from "../../services/api"

const Home = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback((e) => {
      e.preventDefault()
      
      const submit = async () => { 
        setLoading(true)
        try {
          const response = await api.get(`repos/${newRepo}`)
    
          const data = {
            name: response.data.full_name,
          }
      
          setRepositorios([...repositorios, data])
          setNewRepo('')
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }

      }

      submit()
  }, [newRepo, repositorios])

  const handleDelete = useCallback(repo => {
    const find = repositorios.filter(r => r.name !== repo) 
    setRepositorios(find)
  }, [repositorios])

  return (
    <Container>
      
      <h1>
        <FaGithub size={25} /> 
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicionar repositorio" 
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14}/>
          ) : (
            <FaPlus color="#FFF" size={14}/>
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositorios.map(repo => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <Link to='/'>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>

    </Container>
  )
}

export default Home