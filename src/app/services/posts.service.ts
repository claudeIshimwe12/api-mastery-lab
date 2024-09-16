import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, retry } from "rxjs";
import { Post } from "../models/post.interface";
import { environment } from "../../environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  url: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`);
  }

  deletePost(postId: number): void {
    this.http.delete<Post[]>(`${this.url}/posts/${postId}`).pipe(
      retry(3),
      catchError((error) => {
        console.error("Could not delete this post", error);
        return of([]);
      }),
    );
  }

  getSinglePost(postId: string): Observable<Post> {
    const id = Number(postId);
    return this.http.get<Post>(`${this.url}/posts/${id}`).pipe(
      retry(3),
      catchError((error) => {
        console.error("Couldn't get a comment for the post", error);
        return of({ id: 0, title: "", userId: 0, body: "" });
      }),
    );
  }
}
