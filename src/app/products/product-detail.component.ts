import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  products: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
    this.products = {
      productId: id,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 29, 2019',
      description: 'Leaf Rake with 48-inch wooden handle',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    };
  }

  getProduct(id: number) {
    console.log(`getProduct ${id}`);
    this.productService.getProduct(id).subscribe((products) => {
             console.log(products);
             return products;
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
