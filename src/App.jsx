import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import PageServices from './pages/PageServices'
import PageAbout from './pages/PageAbout'
import PageBlog from './pages/PageBlog'
import PagePrensa from './pages/PagePrensa'
import PageExperiencias from './pages/PageExperiencias'
import PageCatering from './pages/PageCatering'
import PageContacto from './pages/PageContacto'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<PageServices />} />
          <Route path="/sobre-mi" element={<PageAbout />} />
          <Route path="/colaboraciones" element={<PageBlog />} />
          <Route path="/prensa" element={<PagePrensa />} />
          <Route path="/experiencias" element={<PageExperiencias />} />
          <Route path="/catering" element={<PageCatering />} />
          <Route path="/contacto" element={<PageContacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}