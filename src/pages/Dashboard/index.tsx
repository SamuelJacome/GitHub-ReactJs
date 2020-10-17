import React, {useState, FormEvent} from 'react';
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';


import { Title, Form, Repositories, Error} from './styles';
import Repository from '../Repository';

interface Repository {
   fullname: string;
   description: string;
   owner: {
      login: string;
      avatar_url: string;
   }
}
const Dashboard: React.FC = () => {
   const [repositories, setRepositories] = useState<Repository[]>([]);
   const [newRepo, setNewRepo] = useState('');
   const [inputError, setInputError] = useState('');

   async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
      event.preventDefault();
      if (!newRepo) {
         setInputError('Digite o autor/nome do repositório')
      }
      try{




      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository =  response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      }catch(err)
      {
         setInputError('Erro na busca por esse repositorio')

      }
   }


  return(
     <>
          <img src={logoImg} alt='Github Explorer'/>
          <Title>Explore repositórios no Github</Title>

          <Form onSubmit = { handleAddRepository }>
               <input
                  value={newRepo}
                  onChange={e => setNewRepo(e.target.value)}
                  placeholder="Digite o nome do repositório"
                  />
               <button type='submit'>Pesquisar</button>
          </Form>
          {inputError!= '' && <Error>{inputError}</Error>}


          <Repositories>

             {repositories.map(repository =>(
                <a key={repository.fullname} href="teste">
                <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                />

                <div>
                   <strong>{repository.fullname}</strong>
                   <p>{repository.description}</p>
                </div>
                <FiChevronRight size={20}/>

             </a>

             ))}


          </Repositories>
     </>
  );

}

export default Dashboard;
