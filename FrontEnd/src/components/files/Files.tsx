import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header';
import Sidebar from '../sidebar';
import useArchivos from '../../hooks/useArchivos';
import useArlertas from '../../hooks/useAlertas';
import File from '../files/File';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';
import { RingLoader } from 'react-spinners'
var zip = require('jszip')();

const Files = () => {

     const { listFilesMemPool, getFiles, sizeList, deleteFile, listFilesCheck, updateState, setListCheck, minarArchivos,
          msgDeleteMultipleFile,setMsgDeleteMultipleFile } = useArchivos();

     const { AlertSuccess } = useArlertas();

     const [timeLoading, setTimeLoadin] = useState(false);

     useEffect(() => {
          getFiles();
     }, [listFilesMemPool])

     const deleteSelected = () => {
          Swal.fire({
               title: `¿Estas Seguro de eliminar ${sizeList} Archivos?`,
               text: `Esta opcion es irreversible`,
               icon: 'question',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               cancelButtonText: 'Cancelar',
               confirmButtonText: 'Sí, eliminar todos!'
          }).then((result) => {
               if (result.isConfirmed) {
                    listFilesCheck.forEach((aid: any) => {
                         deletegroup(aid);
                    });
               }
               updateState();
          })
          if (sizeList === 0) {
               AlertSuccess('Archivos eliminados Correctamente','success');
          }
     }

     
     const deletegroup = (aid: string) => {
          deleteFile(aid);
          setListCheck();
     }


     const downloadSelected = () => {
          listFilesCheck.map((fileId) => {
               let objectFile = listFilesMemPool.find(e => e.id === fileId);
               let name = objectFile.name + "." + objectFile.typeOfFile;
               zip.file(name, objectFile.base64, { base64: true });
          })

          zip.generateAsync({ type: 'blob' }).then(function (content) {
               saveAs(content, 'Archivos.zip')
          })
          zip = require('jszip')();
          setListCheck();
     }

  
     function myFunction() {
          setTimeLoadin(true);
         setTimeout(minar, 7000);
        }


     const minar = () =>{
          minarArchivos().then((resp:any)=>{
               AlertSuccess(resp.data,'info');
          });;
           setTimeLoadin(false);
     }


     return (
          <Fragment>
               <Header />
               <Sidebar />
               <div className="container1 p-5">
               <div className='sweet-loading'>
       
       {timeLoading? ( <div className="z-index">
        <RingLoader size={200}
          color={'#0c2a8e'}
          className="loader" 
          loading={timeLoading}
        />
        </div> ):null}
       
      </div>
                    <div className='container'>
                         <div className="d-padre m-botton">
                              <div className='d-hijo'>
                                   <Link to={"/home/RegistrarArchivo"}
                                        id="btn__registrarse"
                                        className="btn btn-primary"><i className="fa-solid fa-square-plus fa-2x"></i></Link>

                                   <button onClick={myFunction}
                                        id="btn__registrarse"
                                        className="btn btn-info m-left text-light">
                                   
                                   
                                   <i className="fa-solid fa-link fa-2x"></i>
                                       <span className="text-center d-flexB">Minar</span> 
                                   </button>
                              </div>


                              <div className='d-hijo'>

                                   {sizeList >= 2 ? (
                                        <button onClick={deleteSelected} className='btn btn-danger m-right'>Eliminar Seleccionados</button >
                                   ) : null}
                                   {sizeList >= 2 ? (
                                        <button onClick={downloadSelected} className='btn btn-warning text-light'>Descargar Seleccionados</button>
                                   ) : null}
                              </div>

                         </div>



                         <table className="table table-hover">
                              <thead className="bg-black2 text-light">
                                   <tr className="bg-black2 text-light">
                                        <th className='text-center' scope="col">Selected</th>
                                        <th className='text-center' scope="col">Nombre Archivo</th>
                                        <th className='text-center' scope="col">Tipo Archivo</th>
                                        <th className='text-center' scope="col">Acciones</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {listFilesMemPool.length === 0 ? 'No hay Archivos' : (listFilesMemPool.map((file: any) => (
                                        <File key={file.id} archivo={file} />
                                   )))}
                              </tbody>
                         </table>
                    </div>

               </div>
          </Fragment>
     );
}
export default Files;