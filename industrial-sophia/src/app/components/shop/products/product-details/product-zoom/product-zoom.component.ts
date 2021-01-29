import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { Product } from 'src/app/modals/product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-zoom',
  templateUrl: './product-zoom.component.html',
  styleUrls: ['./product-zoom.component.sass']
})
export class ProductZoomComponent {

  public product;
  public selectedProductImageIndex;

  constructor(
    private productsService: ProductService,
    public dialogRef: MatDialogRef<ProductZoomComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product}) {
    this.product = data.product;
    this.selectedProductImageIndex = data.product.uid;
  }

  public close(): void {
    this.dialogRef.close();
  }
}
