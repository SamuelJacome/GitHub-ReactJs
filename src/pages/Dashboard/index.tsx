import React from 'react';
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import Repository from '../Repository';

import { Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
  return(
     <>
          <img src={logoImg} alt='Github Explorer'/>
          <Title>Explore repositórios no Github</Title>

          <Form>
               <input placeholder="Digite o nome do repositório"/>
               <button type='submit'>Pesquisar</button>
          </Form>

          <Repositories>
             <a href="teste">
                <img
                  src="https://avatars0.githubusercontent.com/u/39867221?s=460&u=3c4a409ececaa80ea565dd6b94edec6e4f203d38&v=4"
                  alt="Samuel Jacome"
                />

                <div>
                   <strong>samueljacome/realmDB</strong>
                   <p>Offline first</p>
                </div>
                <FiChevronRight size={20}/>

             </a>

             <a href="teste">
                <img
                  src="https://avatars0.githubusercontent.com/u/39867221?s=460&u=3c4a409ececaa80ea565dd6b94edec6e4f203d38&v=4"
                  alt="Samuel Jacome"
                />

                <div>
                   <strong>samueljacome/realmDB</strong>
                   <p>Offline first</p>
                </div>
                <FiChevronRight size={20}/>

             </a>

             <a href="teste">
                <img
                  src="https://avatars0.githubusercontent.com/u/39867221?s=460&u=3c4a409ececaa80ea565dd6b94edec6e4f203d38&v=4"
                  alt="Samuel Jacome"
                />

                <div>
                   <strong>samueljacome/realmDB</strong>
                   <p>Offline first</p>
                </div>
                <FiChevronRight size={20}/>

             </a>

          </Repositories>
     </>
  );

}

export default Dashboard;
