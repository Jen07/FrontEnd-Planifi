import { Fragment } from 'react';
import useConfiguration from '../hooks/useConfiguration';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import useAlertas from '../hooks/useAlertas';
const Configuracion = ({ config }) => {

     const navigate = useNavigate();

     const { AlertSuccess } = useAlertas();

     const { DeleteConfiguration, getConfigOfState, setConfigEdit } = useConfiguration();

     const redireccionarEdicion = (config) => {

          setConfigEdit(getConfigOfState(config.id)[0]);

          navigate("/home/ConfiguracionEditar");

          //  navigate(`/editar/${config.id}`);
     };

     const confirmarEliminar = (config: any) => {

          Swal.fire({
               title: `¿Estas Seguro de eliminar la configuración?`,
               text: `Esta opcion es irreversible`,
               icon: 'question',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               cancelButtonText: 'Cancelar',
               confirmButtonText: 'Sí, eliminar!'
          }).then((result) => {
               if (result.isConfirmed) {
                    DeleteConfiguration(config.id);
                    AlertSuccess('Eliminado Correctamente','success');
               }
          })
     };


     return (
          <Fragment>
               <tr>
                    <td className='text-center'>{config.variableSistema}</td>
                    <td className='text-center'>{config.cantidadBloques}</td>
                    <td className='text-center'>
                         <button
                              className="btn btn-warning m-2"
                              type="button"
                              onClick={() => redireccionarEdicion(config)}
                         >
                              <i className="fa-solid fa-pen-to-square"></i>
                         </button>
                         <button disabled
                              type="button"
                              className="btn btn-danger"
                              onClick={() => confirmarEliminar(config)}
                         >
                              <i className="fa-solid fa-trash-can"></i>
                         </button>
                    </td>
               </tr>
          </Fragment>
     );

}
export default Configuracion;