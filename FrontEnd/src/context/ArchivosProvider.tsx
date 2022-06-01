import { useState, useEffect, createContext } from 'react';

import Archivo1 from '../components/Models/Archivo.Model'

import clienteAxios from '../config/axios';


const ArchivosContext = createContext(null);


const ArchivosProvider = ({ children }) => {
 
     const [ listFiles, listFilesState ] = useState([]);

     const [ listFilesInsert, listFilesStateInsert ] = useState([]);
  
     const loadStateInsert = (acceptedFiles) =>{
          let i = 0;
          Array.from(acceptedFiles).forEach((archivo: any) => {

              console.log(archivo);
               let reader = new FileReader();
               reader.readAsDataURL(archivo);
               reader.onload = function () {
                   let arrayAuxiliar = [];
                   let base64 = String(reader.result);
                   arrayAuxiliar = base64.split(',');
                   let nombre = archivo.name.substring(0, archivo.name.length - 4);

                    
                  // archivoObj.nombre = nombre;
                  // archivoObj.archivo = arrayAuxiliar[1];
                  // console.log(archivoObj);
                   listFilesInsert.push(new Archivo1(nombre, arrayAuxiliar[1]));
                   
                   
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