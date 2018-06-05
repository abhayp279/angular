import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatLineModule, MatListModule, MatGridListModule, MatCheckboxModule, MatDialogModule, MatSlideToggleModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  entryComponents: [
    LoginComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatLineModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule, 
    MatAutocompleteModule, 
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    LeafletModule.forRoot()
  ],
  providers: [ DishService, PromotionService, LeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
