import { Component, OnInit } from "@angular/core";
import { Post } from "../../models/post.interface";
import { PostsService } from "../../services/posts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  paginatedPosts: Post[] = [];
  itemsPerPage = 10;
  currentPage = 1;
  totalPages = 0;
  error = false;
  selectedPost!: Post | undefined;

  constructor(
    private postService: PostsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response;
        this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
        this.setPage(this.currentPage); // Initialize the first page
      },
      () => {
        this.error = true;
      },
    );
  }

  // Set the current page and get the corresponding products
  setPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPosts = this.posts.slice(startIndex, endIndex);
  }

  // Handle next and previous button clicks
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }
  edit() {
    //this.post.getPaginatedData(1, 10).subscribe(console.log);
  }

  delete(id: number) {
    this.postService.deletePost(id);
  }

  onPostClick(postId: number, event: MouseEvent) {
    event.stopPropagation();
    const id = postId.toString();
    this.router.navigate(["/post", id]);
  }

  showEditModal = false;

  openEditModal(event: MouseEvent, postId: number): void {
    this.selectedPost = this.posts.find((p) => p.id == postId);
    event.stopImmediatePropagation();
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
}
