import React, { Fragment, useState , useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header';
import Sidebar from '../sidebar';
import Dropzone from './Dropzone';
const FileRegister = () => {
     return (
          <Fragment>
               <Header />
               <Sidebar />
               <div className="container1 p-5">
                    <div className="text-center">
                         <p>Agregar Archivos</p>
                    </div>
                     <Dropzone/>
               </div>
          </Fragment>
     );
}
export default FileRegister;