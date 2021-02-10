import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { Category } from 'src/app/modals/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {

  tableau:any =[];
  categorie: any=[];
  constructor(private categorieService: ProductService) {
    this.getAllcategorie();
  }

  ngOnInit() {

    console.log("Tableau:",this.tableau)
  }

  getAllcategorie(){
    this.categorieService.getCategorie().subscribe((res:Category)=>{

      this.tableau=res;

      for (let _i = 0; _i <= this.tableau.length; _i++){

      this.categorie.push(this.tableau[_i]);

       console.log('resultat du for :', this.categorie);
       ;
      }
       return this.categorie

   })
  }

}
