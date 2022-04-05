import './App.css';

import MyHeader from './my_header';

function App() {
  const name = 'hyunho';
  const number = 10;

  return (
    <div className="App">
      <MyHeader />
      <h2>안녕 리액트 {name}</h2>
      <h2>
        {number}는 : {number % 2 === 0 ? '짝수' : '홀수'}
      </h2>
    </div>
  );
}

export default App;
