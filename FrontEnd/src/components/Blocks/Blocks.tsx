import useBlock from '../../hooks/useBlock';
import useArchivo from '../../hooks/useBlock';
import fileDownload from 'js-file-download'
import { base64StringToBlob } from 'blob-util';
import Swal from 'sweetalert2';
import useAlertas from '../../hooks/useAlertas';
import { Link, useNavigate } from "react-router-dom";
import Header from '../../shared/Header';
import Sidebar from '../sidebar';
import { Fragment ,useEffect} from 'react';
import Block from '../Blocks/Block';

const Blocks = () => {

     const redireccionar = useNavigate();
     const { listBlock,getBlocks } = useBlock();
     useEffect(() => {
          getBlocks();
     }, [])
     

     return (
          <Fragment>
               <Header ></Header>
               <div className="container-block p-5">
                    <div className="text-center">
                         <h2>Bloques de Archivos Minados</h2>
                         <main className="contenido-principal">
                         {listBlock.length === 0 ? 'No hay Bloques Minados' : (listBlock.map((block: any) => (
                                        <Block key={block.id} block={block} />
                          )))}
                        </main>
                    
                    </div>
                   
               </div>
               <Sidebar></Sidebar>
          </Fragment>
     );

}
export default Blocks;