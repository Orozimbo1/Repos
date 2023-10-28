// Styles
import { Container, Form, SubmitButton } from "./styles"

// Icons
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'

// Hooks
import { useState, useCallback } from "react"

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

    </Container>
  )
}

export default Home