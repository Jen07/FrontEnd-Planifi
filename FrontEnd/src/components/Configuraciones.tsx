import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Sidebar from './sidebar';
import useConfiguration from '../hooks/useConfiguration';
import Configuracion from './Configuracion';


const Configuraciones = () => {

     const { GetConfiguration, listConfig } = useConfiguration();

     useEffect(() => {
          GetConfiguration();

     }, [])

     return (
          <Fragment>
               <Header />
               <Sidebar />
               <div className="container1 p-5">
                    <div className='container'>
                         <Link to={"/home/variables"}
                              id="btn__registrarse"
                              className="btn btn-primary"><i className="fa-solid fa-square-plus fa-2x"></i></Link>
                         <br></br>
                         <br></br>
                         <h3 className="title">Lista Configuraciones</h3>
                         <br></br>
                         <table className="table table-hover">
                              <thead className="bg-black2 text-light">
                                   <tr className="bg-black2 text-light">
                                        <th className='text-center' scope="col">Mensaje</th>
                                        <th className='text-center' scope="col">Cantidad de Bloques</th>
                                        <th className='text-center' scope="col">Acciones</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {listConfig.length === 0 ? 'No hay Configuraciones' : (listConfig.map(config => (

                                        <Configuracion
                                             key={config.id}
                                             config={config}
                                        />
                                   ))
                                   )}
                              </tbody>
                         </table>
                    </div>

               </div>
          </Fragment>
     );
}
export default Configuraciones;