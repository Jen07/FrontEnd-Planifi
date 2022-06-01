import { useState, useEffect, createContext } from 'react';

import Archivo1 from '../components/Models/Archivo.Model'

import clienteAxios from '../config/axios';


const ArchivosContext = createContext(null);


const ArchivosProvider = ({ children }) => {
 
     const [ listFiles, listFilesState ] = useState([]);

     const [ listFilesInsert, listFilesStateInsert ] = useState([]);
  

     const getTipoArchivo =(path:string)=>{
          let type = 0;

          if(path.substring(path.length - 2,path.length) === 'xt'||path.substring(path.length - 2,path.length) === 'pg'||path.substring(path.length - 2,path.length) === 'ng'||
          path.substring(path.length - 2,path.length) === 'df'
          ){
               type = 3;  
          }
          if(path.substring(path.length - 2,path.length) === 'cx'|| path.substring(path.length - 2,path.length) === 'tx'||path.substring(path.length - 2,path.length) === 'sx'){
               type = 4;
          }
         return type;
     }
     const loadStateInsert = (acceptedFiles) =>{
          let i = 0;
          Array.from(acceptedFiles).forEach((archivo: any) => {
               let reader = new FileReader();
               reader.readAsDataURL(archivo);
               reader.onload = function () {
                   let arrayAuxiliar = [];
                   let base64 = String(reader.result);
                   arrayAuxiliar = base64.split(',');
                   console.log(getTipoArchivo(archivo.path));
                   let name = archivo.name.substring(0, archivo.name.length - 4);
                   let typeOfFile = archivo.path.substring(archivo.path.length,archivo.path.length- getTipoArchivo(archivo.path));
                   let size = archivo.size;
                    //archivoObj.nombre = nombre;
                    //archivoObj.archivo = arrayAuxiliar[1];
                  // console.log(archivoObj);
                   listFilesInsert.push(new Archivo1('Christian',typeOfFile,new Date().toLocaleTimeString(),new Date().toLocaleTimeString(),name, arrayAuxiliar[1]));
                   
                   
               //    listFilesState(preState => [...preState,archivoObj]);
                  i=i+1;
                 // console.log(i);
               }
            
            
          })
          listFilesState(listFilesInsert);
          console.log(listFilesInsert);
     }

     const RegisterFiles = (files) => {
            

     }
     return (
          <ArchivosContext.Provider
               value={{
                    RegisterFiles,
                    loadStateInsert,
                    listFilesState,
                    listFiles,
                    listFilesInsert

               }}
          >
               {children}
          </ArchivosContext.Provider>
     )
}

export {
     ArchivosProvider
}
export default ArchivosContext;