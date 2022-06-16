

class Archivo1 {
  private Owner: string;
  private TypeOfFile: string;
  private Date: string;
  private Size: string;
  private Name: string;
  private Base64: string;

  constructor(
    Owner: string,
    TypeOfFile: string,
    Date: string,
    Size: string,
    Name: string,
    Base64: string
  ) {
    this.Owner = Owner;
    this.TypeOfFile = TypeOfFile;
    this.Date = Date;
    this.Size = Size;
    this.Name = Name;
    this.Base64 = Base64;
  }


  public getNombre() {
    return this.Name;
  }

  public getBase64() {
    return this.Base64;
  }

  public getTipoArchivo() {
    return this.TypeOfFile;
  }

  public getSize() {
    return this.Size;
  }

  public getPropietario() {
    return this.Owner;
  }

  public getFecha() {
    return this.Date;
  }
}
export default Archivo1;


// export default interface Archivo {
//   Owner: string;
//   TypeOfFile: string;
//   Date: string;
//   Size: string;
//   Name: string;
//   Base64: string;
// }
