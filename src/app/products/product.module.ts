import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductEditGuard } from './product-edit.guard';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
import { FilterproductPipe } from '../shared/filterproduct.pipe';
import { ProductAddComponent } from './product-add.component';
import { ProductEditComponent } from './product-edit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/add', component: ProductAddComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'products/:id/edit', component: ProductEditComponent },
    ]),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    FilterproductPipe,
    ProductAddComponent,
    ProductEditComponent,
  ]
})
export class ProductModule { }
