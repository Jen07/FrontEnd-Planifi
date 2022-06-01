import { Fragment } from 'react';
import useConfiguration from '../hooks/useConfiguration';
import { useNavigate } from "react-router-dom";


const Configuracion = ({ config }) => {

     const navigate = useNavigate();

     const { DeleteConfiguration, getConfigOfState,setConfigEdit } = useConfiguration();

     const redireccionarEdicion = (config) => {

          setConfigEdit(getConfigOfState(config.id)[0]);
         
       navigate("/home/ConfiguracionEditar");

        //  navigate(`/editar/${config.id}`);
     };

     const confirmarEliminar = (id:string) => {
          DeleteConfiguration(id);
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
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminar(config.id)}
               >
                    <i className="fa-solid fa-trash-can"></i>
               </button>
               </td>
          </tr>
     </Fragment>
);
     
}
export default Configuracion;