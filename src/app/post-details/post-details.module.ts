import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostDetailsRoutingModule } from "./post-details-routing.module";
import { PostDetailsComponent } from "./post-details.component";
import { PostsService } from "../services/posts.service";
import { PostResolver } from "../services/post.resolver";

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [CommonModule, PostDetailsRoutingModule],
  providers: [PostsService, PostResolver],
})
export class PostDetailsModule {}
