import {Link} from "react-router-dom"

const Header=() =>{
    return(
        <div>
            <header>
                <nav>
                    <Link to ="/">Home</Link>
                     <Link to ="/about">AboutPage</Link>
                      <Link to ="/contact">Contact</Link>
                      <Link to ="/cources">Cources</Link>
                      <Link to ="/cources">Cources</Link>
                </nav>
            </header>
        </div>
    )
}
export default Header;