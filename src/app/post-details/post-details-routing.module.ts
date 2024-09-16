import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDetailsComponent } from "./post-details.component";
import { PostResolver } from "../services/post.resolver";

const routes: Routes = [
  {
    path: ":id",
    component: PostDetailsComponent,
    resolve: {
      posts: PostResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDetailsRoutingModule {}
