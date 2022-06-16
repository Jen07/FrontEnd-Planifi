const ListFile = ({ archivos }) => {

     return (
          <li className="list-group-item list-group-item-action">{archivos.Name}</li>
     );
}
export default ListFile;