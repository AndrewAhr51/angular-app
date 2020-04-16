import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { FilterproductPipe } from '../shared/filterproduct.pipe';
import { ProductAddComponent } from './product-add.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'product/add', component: ProductAddComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'products', component: ProductListComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    FilterproductPipe,
    ProductAddComponent,
  ]
})
export class ProductModule { }
