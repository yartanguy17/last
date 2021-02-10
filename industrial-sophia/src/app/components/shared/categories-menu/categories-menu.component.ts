import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/modals/category.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.sass']
})
export class CategoriesMenuComponent implements OnInit {

  category: Category[];
  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    // this.category=this.productService.getCategorie()
  }

}
