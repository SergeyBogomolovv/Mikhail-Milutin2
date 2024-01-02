import './App.css'
import NewYear from './components/newYear/newYear'
import About from './components/aboutpage/about'
import Contacts from './components/contacts/contacts'
import Main from './components/mainpage/main'
import Politica from './components/politica/politica'
import Interesting from './components/interesting/interesting'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Featured from './components/featured/Featured'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { AnimatePresence } from 'framer-motion'
import { log } from 'console'

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='featured' element={<Featured />} />
            <Route path='about' element={<About />} />
            <Route path='main' element={<Main />} />
            <Route path='NewYear' element={<NewYear />} />
            <Route path='Interesting' element={<Interesting />} />
            <Route path='Politica' element={<Politica />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Contacts />
    </>
  )
}

export default App
