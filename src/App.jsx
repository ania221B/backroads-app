import { useState } from 'react'
import './assets/css/App.css'
import Header from './components/Header'
import { PageContents } from './components/PageContents'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Header></Header>
      <PageContents></PageContents>
      <Footer></Footer>
    </>
  )
}

export default App
