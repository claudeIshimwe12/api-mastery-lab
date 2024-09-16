import { NgModule } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { NewPostComponent } from "./components/new-post/new-post.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EditModalComponent } from "./components/edit-modal/edit-modal.component";
@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    HeaderComponent,
    HomeComponent,
    NewPostComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
