import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post.interface";
import { ActivatedRoute } from "@angular/router";
import { CommentService } from "../services/comment.service";
import { Observable } from "rxjs";
import { Comment } from "../models/comment.interface";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrl: "./post-details.component.scss",
})
export class PostDetailsComponent implements OnInit {
  post!: Post;
  comments$!: Observable<Comment[]>;
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
  ) {}

  ngOnInit() {
    this.post = this.route.snapshot.data["posts"];
    this.comments$ = this.commentService.getComment(this.post.id);
  }
}
