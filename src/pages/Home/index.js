import gitLogo from '../../assets/github-logo.png';

import {Container} from './styles';
import Input from '../../components/Input';
import ItemRepo from '../../components/ItemRepo';

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='Logo GitHUB'/>
      <Input />
      <ItemRepo />
    </Container>
  );
}

export default App;
