import React, { Fragment } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Sidebar from './sidebar';
import { useState, useEffect } from 'react';

import useConfiguration from '../hooks/useConfiguration';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AgregarVariable = () => {


     const redireccionar = useNavigate();

     const [valido, Alerta] = useState(false);

     const { RegisterConfiguration } = useConfiguration();

     const [config, insertConfig] = useState({
          cantidadBloques: '',
          variableSistema: '',
     });

     useEffect(() => {
        
     },[])
     const handleSubmit = e => {
          e.preventDefault();

          //Validar formulario
          if (config.cantidadBloques.trim() === '' || config.variableSistema.trim() === '') {
               Alerta(true);
               
               return;
          }

          console.log(config);
          Alerta(false);
         //Insertar en mongo
          RegisterConfiguration(config);
          redireccionar("/home/Configuraciones");
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Agregado correctamente',
               showConfirmButton: false,
               timer: 2700
             })
     }

     return (
          <Fragment>
               <Header />
               <Sidebar />
               <div className="container1 p-5">
                    <div className='card'>
                         <div className='card-header text-center bg-black2 text-light '>Agregar Configuración</div>
                         <form onSubmit={handleSubmit} className='p-3'>
                              <div className='card-body'>
                                   <div className="mb-3">
                                        <label className="form-label">Variable</label>
                                        <input
                                             type="variable"
                                             className="form-control"
                                             name='variableSistema'
                                             value={config.variableSistema}
                                             onChange={e => insertConfig({
                                                  ...config,
                                                  [e.target.name]: e.target.value
                                             })}
                                             aria-describedby="variable" />
                                   </div>

                                   <div className="mb-3">
                                        <label className="form-label">Cantidad de Documentos por bloque </label>
                                        <input type="number"
                                             name='cantidadBloques'
                                             value={config.cantidadBloques}
                                             onChange={e => insertConfig({
                                                  ...config,
                                                  [e.target.name]: e.target.value
                                             })}
                                             className="form-control" />
                                   </div>
                         
                                   <div className="row">
                                        <div className="col-10">
                                             <button type="submit" className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"></i> Agregar</button>
                                        </div>
                                        <div className="col-2">
                                             <Link to={"/home/configuraciones"} className="btn btn-warning m-1"><i className="fa-solid fa-circle-arrow-left"></i>  Volver</Link>
                                        </div>
                                   </div>
                                  
                              </div>
                              {valido ? <div className="alert alert-danger" role="alert">
                                   Todos los campos son Obligatorios
                              </div> : null}
                         </form>
                    </div>
               </div>

               <Footer />
          </Fragment>
     );
}
export default AgregarVariable;