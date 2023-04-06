import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './styles/app.scss'
import PageCart from './pages/PageCart'
import Page404 from './pages/Page404'
import PizzaPage from './pages/PagePizza'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route index element={<PizzaPage />} />
                        <Route path="/cart" element={<PageCart />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
