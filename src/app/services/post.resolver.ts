import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Post } from "../models/post.interface";
import { PostsService } from "./posts.service";
@Injectable()
export class PostResolver implements Resolve<Post> {
  constructor(private posts: PostsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    const courseUrl = route.paramMap.get("id") ?? "";

    return this.posts.getSinglePost(courseUrl);
  }
}
