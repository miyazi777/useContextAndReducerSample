import React, { useContext } from 'react';

type StateType = {
  count: number
}

const TestContext = React.createContext({} as StateType);

function App() {
  return (
    <>
      <h1>use reducer & use context sample</h1>
      <TestContext.Provider value={ { count: 3 } }>
        <Test/>
      </TestContext.Provider>
    </>
  );
}

export default App;

const Test = () => {
  const testContext = useContext(TestContext);

  return (
    <>
      <h2>Test component</h2>
      <div>count: { testContext.count }</div>
    </>
  )
}
