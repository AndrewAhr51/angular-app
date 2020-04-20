import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './product';
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
  products: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log (id)
    this.productService.onGetProduct(id).subscribe((products) => {
      this.products = JSON.parse(JSON.stringify(products))
      return JSON.stringify(products);
    });
  }
  onEdit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/products/{$id}/edit`]);
  }

  onDelete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/products/{$id}/delete`]);
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
