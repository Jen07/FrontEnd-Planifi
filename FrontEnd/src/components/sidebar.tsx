import { Link } from "react-router-dom";


const Sidebar = () => {
     return (
          <div className="container-fluid">
               <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-black2 sidebar collapse">
                         <div className="position-sticky pt-3">
                              <ul className="nav flex-column">
                                   <li className="nav-item">
                                        <Link to={"/home/configuraciones"} className="nav-link text-light" aria-current="page" >
                                             <span data-feather="home"></span>
                                             Dashboard
                                        </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link to={"/home/configuraciones"} className="nav-link text-light" >
                                             <span data-feather="file"></span>
                                             Usuarios
                                        </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link to={"/home/configuraciones"} className="nav-link text-light" >
                                             <span data-feather="shopping-cart"></span>
                                             Configuracion
                                        </Link>
                                   </li>
                                   <li className="nav-item">
                                        <Link to={"/home/Archivos"} className="nav-link text-light" >
                                             <span data-feather="users"></span>
                                             Archivos
                                        </Link>
                                   </li>

                                   <li className="nav-item">
                                        <Link to={"/login"} className="nav-link text-light" >
                                             <span data-feather="users"></span>
                                             Salir
                                        </Link>
                                   </li>
                              </ul>
                         </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                    </main>
               </div>
          </div>
     );
}
export default Sidebar;