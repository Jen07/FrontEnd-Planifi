
// @ts-ignore
import Login from '../components/Login/Login';
import Redireccionar from '../components/Redireccionar/Redireccionar';
// @ts-ignore
import Register from '../components/Login/Register';
import AgregarVariable from '../components/AgregarVariable';
import Configuraciones from '../components/Configuraciones';
import EditConfiguracion from '../components/EditarConfiguracion';

import Files from '../components/files/Files';
import FileRegister from '../components/files/FileRegister';
import Blocks from '../components/Blocks/Blocks';

const routes = [

     { path: '/', componente: Login, exact: true },

     { path: '/login', componente: Login, exact: true },

     { path: '/register', componente: Register, exact: true },

     { path: '/home/variables', componente: AgregarVariable, exact: true },

     { path: '/home/configuraciones', componente: Configuraciones, exact: true },

     { path: '/home/ConfiguracionEditar', componente: EditConfiguracion, exact: true },

     { path: '/home/Archivos', componente: Files, exact: true },

     { path: '/home/RegistrarArchivo', componente: FileRegister, exact: true },

     { path: '/home/Blocks', componente: Blocks, exact: true },

     { path: '*', element: Redireccionar },
];



export default routes;