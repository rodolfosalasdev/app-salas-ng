import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-notes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-notes.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNotesComponent {

  private formBuilder = inject(FormBuilder);

  protected form = this.formBuilder.group({
    titleNote: [null, Validators.required],
    note: [null, Validators.required],
  });

  onSubmit(form: any): void {
    //criar e enviar o form para o serviço
    console.log('form', form);
    this.form.controls.note.setValue(null);
    this.form.controls.titleNote.setValue(null);
  }
}
