import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateNotesComponent } from './create-notes/create-notes.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CreateNotesComponent],
  templateUrl: './notes.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {

}
