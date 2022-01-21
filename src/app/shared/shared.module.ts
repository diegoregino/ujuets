import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UserInnerComponent } from './components/user-inner/user-inner.component';
import { InlineSVGModule } from 'ng-inline-svg';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    TopbarComponent,
    UserInnerComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
