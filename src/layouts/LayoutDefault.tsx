import { Outlet } from 'react-router'
import Header from '../components/Header'

const LayoutDefault = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default LayoutDefault
