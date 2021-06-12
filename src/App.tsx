import React, { useContext, useReducer } from 'react';

// useRedcuerで扱いたいデータ形式
type StateType = {
  count: number
}

// useReducerで扱いたいactions
type Actions = {
  type: 'increment'
  payload?: number
}

// useContextで他コンポーネントと共有したいデータ。今回はreducerのstateとdispatchを共有したい。
type ContextType = {
  state: StateType
  dispatch: React.Dispatch<Actions>
}

// useContextを作成
const TestContext = React.createContext({} as ContextType);

// useReducerのaction定義
const countReducer = (state: StateType, action: Actions): StateType => {
  if (action.type === 'increment') {
    return { count: state.count + 1 }
  }
  return state;
}

function App() {
  // reducerを定義。
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  return (
    <>
      <h1>use reducer & use context sample</h1>
      <TestContext.Provider value={ { state, dispatch } }>
        <Test/>
      </TestContext.Provider>
    </>
  );
}

export default App;

const Test = () => {
  // useContextにて共有コンテキストを取り出す
  const testContext = useContext(TestContext);

  // 共有コンテキストからstateとdispatchを取り出す
  const { state, dispatch } = testContext;

  return (
    <>
      <h2>Test component</h2>
      <div>count: { state.count }</div>
      <button onClick={() => dispatch({ type: 'increment' }) }>plus</button>
    </>
  )
}
