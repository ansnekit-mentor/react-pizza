import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/app.scss'
import PageCart from './pages/PageCart'
import Page404 from './pages/Page404'
import PagePizzaList from './pages/PagePizzaList'
import PagePizzaDetail from './pages/PagePizzaDetail'
import LayoutDefault from './layouts/LayoutDefault'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LayoutDefault />}>
                    <Route index element={<PagePizzaList />} />
                    <Route path="/cart" element={<PageCart />} />
                    <Route path="/:id" element={<PagePizzaDetail />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
