import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <div className='navBar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/discord-timestamp'}>Discord Timestamps</Link>
        </div>
    )
}