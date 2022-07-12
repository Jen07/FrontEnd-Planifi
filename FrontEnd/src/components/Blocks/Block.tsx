import fileDownload from 'js-file-download'
import { base64StringToBlob } from 'blob-util';
import { Link, useNavigate } from "react-router-dom";
import { Fragment } from 'react';
import { saveAs } from 'file-saver';
var zip = require('jszip')();

const Block = ({ block }) => {

     const redireccionar = useNavigate();

     const descargarArchivo = (file: any) => {

          const { base64, typeOfFile, name } = file;
          let tipo;
          if (typeOfFile === 'pdf') {
               tipo = 'application/pdf'
          } else if (typeOfFile === 'jpg') {
               tipo = 'image/jpeg';
          } else if (typeOfFile === 'png') {
               tipo = 'image/png';
          } else if (typeOfFile === 'docx') {
               tipo = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document/';
          } else if (typeOfFile === 'xlsx') {
               tipo = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          } else if (typeOfFile === 'txt') {
               tipo = 'text/plain';
          } else {
               tipo = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
          }

          // var decodedData = window.atob(base64)
          const blob = base64StringToBlob(base64, tipo);

          fileDownload(blob, `${name}.${typeOfFile}`);
     }

     const descargarEnBloque = (blocks: any) => {
          blocks.documents.map((file) => {
               let name = file.name + "." + file.typeOfFile;
               zip.file(name, file.base64, { base64: true });
          })

          zip.generateAsync({ type: 'blob' }).then(function (content) {
               saveAs(content, 'ArchivosBloque.zip')
          })
          zip = require('jszip')();
     }

     return (
          <Fragment>
               <article className="entrada">

                    <div className="contenido">
                         <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2021/08/04022409/WHAT-IS-BLOCKCHAIN.png" alt="logo" />

                         <h3 className='max'></h3>
                         <p>IdBloque Anterior: <span>{block.idBlock}</span></p>
                         <p>MiliSegundos: <span>{block.milliSeconds}</span></p>
                         <p>Número de Pruebas: <span>{block.test}</span></p>
                         <p>Fecha Minado: <span>{block.timesStamp}</span></p>
                         <p> Hash Previo: <span className='max'>{block.previousHash}</span></p>
                         <p> Hash: <span className='max'>{block.hash}</span></p>
                         <a onClick={() => descargarEnBloque(block)} className="boton">Descargar en Bloque</a>
                         <p>
                              <a className="boton" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                   Descarga Individual
                              </a>
                         </p>
                         <div className="collapse" id="collapseExample">
                              <div className="card card-body">

                                   <ul className="list-group">
                                        {(block.length === 0) ? ('No hay archivos Minados') : (
                                             <table className="table table-hover">
                                                  <thead className="bg-black2 text-light">
                                                       <tr className="">
                                                            <th className='text-center' scope="col">Nombre</th>
                                                            <th className='text-center' scope="col">Tipo</th>
                                                            <th className='text-center' scope="col">acción</th>
                                                       </tr>
                                                  </thead>
                                                  <tbody>

                                                       {block.documents.length === 0 ? 'No hay Archivos' : (block.documents.map((file: any) => (
                                                            <tr>
                                                                 <td className='text-center'>{file.name}</td>
                                                                 <td className='text-center'>{file.typeOfFile}</td>
                                                                 <td className='text-center'><button
                                                                      className="btn btn-warning text-light m-2"
                                                                      type="button"
                                                                      onClick={() => descargarArchivo(file)}>
                                                                      <i className="fa-solid fa-file-arrow-down"></i>
                                                                 </button>
                                                                 </td>
                                                            </tr>
                                                       )))}

                                                  </tbody>
                                             </table>
                                        )}

                                   </ul>
                              </div>
                         </div>
                    </div>
               </article>
          </Fragment>
     );

}
export default Block;