import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="box">
        <header>
            <h2>React Router DOM :) testing...</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <h4>React Router 2023 © </h4>
        </footer>
    </div>
  )
}

export default RootLayout