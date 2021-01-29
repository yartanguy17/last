export class Category {
  uid?:string;
  nom?:string;
  description?:string;
  image?:string;

  constructor(uid?:string,nom?:string,description?:string,image?:string){
    this.uid =uid;
    this.nom=nom;
    this.description=description;
    this.image=image;
  }
}
