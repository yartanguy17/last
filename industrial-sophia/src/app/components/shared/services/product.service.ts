import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/modals/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { ElementSchemaRegistry } from '@angular/compiler';
import { Category } from 'src/app/modals/category.model';



// Get product from Localstorage
let products = JSON.parse(localStorage.getItem("compareItem")) || [];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public currency : string = 'USD';
  public catalogMode : boolean = false;

  private _url: string = "assets/data/";
  public url = "assets/data/banners.json";

  private tabP:Product[]=[];
  private tabC:Category[]=[];

  public compareProducts : BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public observer   :  Subscriber<{}>;

  constructor(private httpClient: HttpClient, public snackBar: MatSnackBar) {
   this.compareProducts.subscribe(products => products = products)

   this.products()
   this.categorie()
   console.log("test produit:",this.products())

   console.log("test tab:",this.tabP)
   console.log("test tabC:",this.tabC)

   this.getProduct("d612755e-0573-401c-a2f2-8a82a9a42191")

  // this.getProducts()
  }

  private products() {

     this.httpClient.get<Product[]>("http://51.89.97.33:5500/api/products").subscribe(donne=>{
        donne.forEach(res=>{
          console.log("test p:",res)
          this.tabP.push(res)
       })
     })

     console.log("test tab in func:",this.tabP)
     return this.tabP
  }

  public categorie(){

    this.httpClient.get<Category[]>("http://51.89.97.33:5500/api/categories").subscribe(donne=>{
      donne.forEach(res=>{
        console.log("test c:",res)
        this.tabC.push(res)
     })
   })

   console.log("test tabc in func:",this.tabC)
   return this.tabC
  }

  public banners(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }


    // Get Banners
    public getBanners() {
      return this.banners();
    }

    // Get Banners
    public getProducts(){
      return this.tabP
    }


      // Get Products By Id
  public getProduct(id: string) {

   const f = this.getProducts().find(item=>item.uid === id)

    console.log("fin:",f)
    return f


    /*.pipe(map(items => {
      return items.find((item: Product) =>
        { return item.uid === id; });
      }));*/
    // return this.products.find(product=> product.id === id);

    // return this.httpClient.get<Product>(this._url + 'product-' + id + '.json');
  }


        /*
      ---------------------------------------------
      ----------  Compare Product  ----------------
      ---------------------------------------------
   */

// Get Compare Products
public getComapreProducts(): Observable<Product[]> {
  const itemsStream = new Observable(observer => {
    observer.next(products);
    observer.complete();
  });
  return <Observable<Product[]>>itemsStream;
}

// If item is aleready added In compare
public hasProduct(product: Product): boolean {
  const item = products.find(item => item.id === product.uid);
  return item !== undefined;
}

 // Add to compare
 public addToCompare(product: Product): Product | boolean {
  let message, status;
  var item: Product | boolean = false;
  if (this.hasProduct(product)) {
    item = products.filter(item => item.uid === product.uid)[0];
    const index = products.indexOf(item);
    this.snackBar.open('The product  ' + product.nom + ' already added to comparison list.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

  } else {
    if(products.length < 4)
      products.push(product);
      message = 'The product ' + product.nom + ' has been added to comparison list.';
      status = 'success';
      this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });

  }
    localStorage.setItem("compareItem", JSON.stringify(products));
    return item;
}

// Removed Product
public removeFromCompare(product: Product) {
  if (product === undefined) { return; }
  const index = products.indexOf(product);
  products.splice(index, 1);
  localStorage.setItem("compareItem", JSON.stringify(products));
}

   // Get Products By category
   public getProductByCategory(category: string) {

    this.tabP.filter(item=>{
      if(category == 'all')
          return item
          else
          return item.category === category
    })
    /*return this.products().pipe(map(items =>
       items.filter((item: Product) => {
         if(category == 'all')
            return item
            else
            return item.category === category;

       })
     ));*/
  }

}
