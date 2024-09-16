import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment } from "../models/comment.interface";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getComment(postId: number): Observable<Comment[]> {
    const id = String(postId);
    return this.http.get<Comment[]>(`${this.url}posts/${id}/comments`);
  }
}
