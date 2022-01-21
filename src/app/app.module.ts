import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsModule, DrawersModule, DropdownMenusModule, ExtrasModule, ModalsModule, WidgetsModule } from './_metronic/partials';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { AuthInterceptorService } from './core/services/auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot(),
    CardsModule,
    DropdownMenusModule,
    WidgetsModule,
    ModalsModule,
    HttpClientModule,
    ExtrasModule,
    DrawersModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
