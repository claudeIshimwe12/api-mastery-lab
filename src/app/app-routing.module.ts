import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NewPostComponent } from "./components/new-post/new-post.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "post",
    loadChildren: () =>
      import("./post-details/post-details.module").then(
        (m) => m.PostDetailsModule,
      ),
  },
  {
    path: "new-post",
    component: NewPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
