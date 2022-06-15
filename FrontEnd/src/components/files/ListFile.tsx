const ListFile = ({ archivos }) => {

     console.log(archivos);
     return (
          <li className="list-group-item list-group-item-action">{archivos.nombre}</li>
     );
}
export default ListFile;