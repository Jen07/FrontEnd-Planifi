import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header';
import Sidebar from '../sidebar';
import useArchivos from '../../hooks/useArchivos';
import File from '../files/File';

const Files = () => {

     const { listFiles, listFilesMemPool, getFiles } = useArchivos();

     const [ tempList, setTempList ] = useState([]);

      useEffect(() =>{
          getFiles();
           
      
      },[listFilesMemPool])
     return (
          <Fragment>
               <Header />
               <Sidebar />
               <div className="container1 p-5">
                    <div className='container'>
                         <Link to={"/home/RegistrarArchivo"}
                              id="btn__registrarse"
                              className="btn btn-primary"><i className="fa-solid fa-square-plus fa-2x"></i></Link>
                         <br></br>
                         <br></br>
                         <h3 className="title">Lista Archivos</h3>
                         <br></br>
                         <table className="table table-hover">
                              <thead className="bg-black2 text-light">
                                   <tr className="bg-black2 text-light">
                                        <th className='text-center' scope="col">Nombre Archivo</th>
                                        <th className='text-center' scope="col">Tipo Archivo</th>
                                        <th className='text-center' scope="col">Acciones</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {listFilesMemPool.length === 0 ? 'No hay Archivos' : (listFilesMemPool.map(file => (

                                        <File
                                             key={file.id}
                                             archivo={file}
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
export default Files;