import IconNavbar from './CartWidget'

export function NavBar() {

    return(
        <header>
            <nav>
                <div className="logo">
                    Shop Store
                </div>
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Productos</a></li>
                    <IconNavbar />
                </ul>
            </nav>
        </header>
    )

}