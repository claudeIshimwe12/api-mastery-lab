import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Post } from "../../models/post.interface";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrl: "./paginator.component.scss",
})
export class PaginatorComponent implements OnInit {
  @Input() posts: Post[] = [];
  @Output() nextPage: EventEmitter<boolean> = new EventEmitter();
  @Output() setPage: EventEmitter<number> = new EventEmitter();
  @Output() previousPage: EventEmitter<boolean> = new EventEmitter();

  itemsPerPage = 10;
  currentPage = 1;
  totalPages = 0;

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
  }
  OnNextPage() {
    this.currentPage++;
    this.nextPage.emit();
  }

  OnSetPage(pages: number) {
    this.currentPage = pages;
    this.setPage.emit(pages);
  }
  OnPreviousPage() {
    this.currentPage--;
    this.previousPage.emit();
  }
}
