import './App.css';

import MyHeader from './my_header';
import Counter from './count';
import Container from './Container';

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    initialValue: 5,
  };

  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
