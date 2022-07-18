import trivia from './assets/trivia.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = "navbar">
            <Link to = '/' style={{ textDecoration: 'none' }}>
                <div className="nav-title">
                    <div className="icon">
                        <img src={trivia} alt="trivia" width="50" height="50"/>
                    </div>
                    <h1>THE TRIVIA APP</h1>
                </div>
            </Link>
        </div>
      );
}
 
export default Navbar;