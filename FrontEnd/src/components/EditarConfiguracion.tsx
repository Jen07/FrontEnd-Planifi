import React, { Fragment } from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Sidebar from './sidebar';
import { useState, useEffect } from 'react';

import useConfiguration from '../hooks/useConfiguration';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../Alertas/Alerta';
import useAlertas from '../hooks/useAlertas';

const EditConfiguracion = () => {

     const redireccionar = useNavigate();

     const { AlertSuccess, setStateAlerta, valido } = useAlertas();

     const { configuracionEdit, UpdateConfiguration } = useConfiguration();

     const [config, insertConfig] = useState({
          id: configuracionEdit.id,
          cantidadBloques: configuracionEdit.cantidadBloques,
          variableSistema: configuracionEdit.variableSistema,
     });

     useEffect(() => {

     }, []);

     const handleSubmit = e => {
          e.preventDefault();
          //Validar formulario
          if (config.cantidadBloques.trim() === '' || config.variableSistema.trim() === '') {
               setStateAlerta(true);
               return;
          }
          setStateAlerta(false);
          //Guardar Registro actualizado en mongo
          UpdateConfiguration(config);
          redireccionar("/home/Configuraciones");
     }

     return (
          <Fragment>
               <Header />
               <Sidebar />
               <div className="container1 p-5">
                    <div className='card'>
                         <div className='card-header text-center bg-black2 text-light '>Modificar Configuración</div>
                         <form onSubmit={handleSubmit} className='p-3'>
                              <div className='card-body'>
                                   <div className="mb-3">
                                        <label className="form-label">Variable</label>
                                        <input disabled
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

                                   <div className="flex-padre">
                                        <div className="flex-hijo">
                                             <button type="submit" className="btn btn-primary expand"> <i className="fa-solid fa-floppy-disk"></i> Guardar</button>
                                        </div>
                                        <div className="flex-hijo">
                                             <Link to={"/home/configuraciones"} className="btn btn-warning expand"><i className="fa-solid fa-circle-arrow-left"></i>  Volver</Link>
                                        </div>
                                   </div>

                              </div>
                              {
                                   valido ?
                                        <Alert>{'Campos Requeridos'}</Alert> : null
                              }
                         </form>
                    </div>
               </div>
          </Fragment>
     );
}
export default EditConfiguracion;