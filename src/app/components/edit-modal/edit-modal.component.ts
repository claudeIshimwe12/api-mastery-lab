import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Post } from "../../models/post.interface";

@Component({
  selector: "app-edit-modal",
  templateUrl: "./edit-modal.component.html",
  styleUrls: ["./edit-modal.component.scss"],
})
export class EditModalComponent implements OnChanges {
  @Input() post!: Post | undefined;
  @Output() modalClosed: EventEmitter<void> = new EventEmitter<void>();

  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      title: ["", Validators.required],
      body: ["", Validators.required],
    });
  }

  ngOnChanges(): void {
    if (this.post) {
      this.editForm.patchValue({
        title: this.post.title,
        body: this.post.body,
      });
    }
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.modalClosed.emit();
    }
  }

  closeModal(): void {
    this.modalClosed.emit();
  }
}
