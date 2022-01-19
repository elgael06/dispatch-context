import { useState } from 'react'
import ContextApp from './context'
import FormRegister from './compoents/FormRegister'
import UserList from './compoents/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextApp >
      <h1>  User Register </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <FormRegister />
        <UserList />
      </div>
    </ContextApp>
  )
}

export default App
