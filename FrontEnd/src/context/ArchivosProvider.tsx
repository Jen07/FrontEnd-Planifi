
import { useState, useEffect, createContext } from 'react';
import { json } from 'stream/consumers';

import Archivo1 from '../components/Models/Archivo.Model'
import Archivo3 from '../components/Models/Archivo.Model' 
import clienteAxios from '../config/axios';


const ArchivosContext = createContext(null);


const ArchivosProvider = ({ children }) => {

     const [listFiles, listFilesState] = useState([]);

     const [listFilesInsert, listFilesStateInsert] = useState([]);

     const [listFilesMemPool, loadFiles] = useState([]);


     const getTipoArchivo = (path: string) => {
          let type = 0;

          if (path.substring(path.length - 2, path.length) === 'xt' || path.substring(path.length - 2, path.length) === 'pg' || path.substring(path.length - 2, path.length) === 'ng' ||
               path.substring(path.length - 2, path.length) === 'df'
          ) {
               type = 3;
          }
          if (path.substring(path.length - 2, path.length) === 'cx' || path.substring(path.length - 2, path.length) === 'tx' || path.substring(path.length - 2, path.length) === 'sx') {
               type = 4;
          }
          return type;
     }

     const loadStateInsert = (acceptedFiles) => {
          Array.from(acceptedFiles).forEach((archivo: any) => {
               let reader = new FileReader();
               reader.readAsDataURL(archivo);
               reader.onload = function () {
                    let base64 = [];
                    let array = String(reader.result);
                    base64 = array.split(',');
                    let name = archivo.name.substring(0, archivo.name.length - 4);
                    let typeOfFile = archivo.path.substring(archivo.path.length, archivo.path.length - getTipoArchivo(archivo.path));
                    let size = archivo.size;
                    //archivoObj.nombre = nombre;
                    //archivoObj.archivo = arrayAuxiliar[1];
                    // console.log(archivoObj);
                    listFilesInsert.push(new Archivo1(localStorage.getItem('idUser'), typeOfFile, new Date().toLocaleTimeString(), String(size), name, base64[1]));

                   
               }
          })
          listFilesState(listFilesInsert);
     }
     const RegisterFiles = async (file: Archivo1) => {
          console.log(file);

          
          try {
         const { data }  =  await clienteAxios.post(`memPool`, file);
                  listFilesMemPool.push(file);
                // loadFiles(data);
          } catch (error) {
               console.log(error);
          }
     }
     const deleteFile = async (id: string) => {
          try {
               await clienteAxios.delete(`memPool/${id}`);
               const filtredData = listFilesMemPool.filter(item => item.id !== id);
               loadFiles(filtredData);
          } catch (error) {
               console.log(error);
          }
     }
     const getFiles = async () => {
          try {
               const { data } = await clienteAxios.get(`memPool`);
           
               loadFiles(data);
          } catch (error) {
               console.log(error);
          }
     }
     const setListInsert = () =>{
          listFilesStateInsert(null)
     }
     return (
          <ArchivosContext.Provider
               value={{
                    RegisterFiles,
                    loadStateInsert,
                    listFilesState,
                    listFiles,
                    listFilesInsert,
                    getFiles,
                    listFilesMemPool,
                    deleteFile,
                    setListInsert,
                    listFilesStateInsert
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