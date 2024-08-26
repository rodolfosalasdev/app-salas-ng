import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-create-notes",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./create-notes.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateNotesComponent {
  @Output() public dataCreateNote = new EventEmitter<any>();
  private formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    titleNote: [null, Validators.required],
    note: [null, Validators.required],
  });

  onSubmit(form: any): void {
    this.dataCreateNote.emit(form);
    
    this.form.controls.note.setValue(null);
    this.form.controls.titleNote.setValue(null);
  }
}
