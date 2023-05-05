/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './components/headers/Headers'
import Titles from './components/Titles/Titles'
import Tables from './components/Tables/Table'
import Layout from './components/Layouts/Layout'
import Files from './Pages/Folders/Files'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Files />
      </Layout>

    </>
  )
}

export default App
