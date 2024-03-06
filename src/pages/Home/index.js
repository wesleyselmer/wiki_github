import gitLogo from '../../assets/github-logo.png';

import {Container} from './styles';
import Input from '../../components/Input';
import ItemRepo from '../../components/ItemRepo';
import { useState } from 'react';
import Button from '../../components/Button';
import { api } from '../../services/api';

function App() {

  const [repos,setRepos] = useState([]);
  const [currentRepo,setCurrentRepo] = useState([]);


  const handleSearchRepo = async () => {
    if (currentRepo !== '') {
      const {data} = await api.get(`repos/${currentRepo}`);

      if (data.id){
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          setRepos(prev => [...prev,data]);
          setCurrentRepo('');
          return;
        } else {
          alert('Repositório já existe!');
          setCurrentRepo('');
        }
      } else {
        alert('Repositório não encontrado!');
        setCurrentRepo('');
      }
    } else {
      alert('Digite um repositório, para busca.');
    }
  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo GitHUB'/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value) } />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo} /> )}
    </Container>
  );
}

export default App;
