import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { FullArticle } from './pages/FullArticle'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<FullArticle />} />
    </Routes>
  )
}
