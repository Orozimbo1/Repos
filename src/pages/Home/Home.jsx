// Styles
import { Container, Form, SubmitButton } from "./styles"

// Icons
import { FaGithub, FaPlus } from 'react-icons/fa'

// Hooks
import { useState, useCallback } from "react"

// services
import api from "../../services/api"

const Home = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback((e) => {
      e.preventDefault()
      
      const submit = async () => {
        const response = await api.get(`repos/${newRepo}`)
    
        const data = {
          name: response.data.full_name,
        }
    
        setRepositorios([...repositorios, data])
        setNewRepo('')
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

        <SubmitButton>
          <FaPlus color="#FFF" size={14}/>
        </SubmitButton>
      </Form>

    </Container>
  )
}

export default Home