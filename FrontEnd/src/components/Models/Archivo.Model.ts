class Archivo1 {
  private owner: string;
  private typeOfFile: string;
  private date: string;
  private size: string;
  private name: string;
  private base64: string;

  constructor(
    owner: string,
    typeOfFile: string,
    date: string,
    size: string,
    name: string,
    base64: string
  ) {
    this.owner = owner;
    this.typeOfFile = typeOfFile;
    this.date = date;
    this.size = size;
    this.name = name;
    this.base64 = base64;
  }

  public getNombre() {
    return this.name;
  }

  public getBase64() {
    return this.base64;
  }

  public getTipoArchivo() {
    return this.typeOfFile;
  }

  public getSize() {
    return this.size;
  }

  public getPropietario() {
    return this.owner;
  }

  public getFecha() {
    return this.date;
  }
}
export default Archivo1;

export interface Archivo {
  nombre: string;
  archivo: string;
}
