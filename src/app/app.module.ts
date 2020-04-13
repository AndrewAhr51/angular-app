import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './shared/star.component';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import { FilterPipe} from './shared/filterpipe';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, FilterPipe, StarComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],

})
export class AppModule {}
