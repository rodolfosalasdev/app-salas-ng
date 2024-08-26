import { NotesService } from './../../_services/notes.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { ReadNotesComponent } from "./read-notes/read-notes.component";
import { INotes } from '../../_interfaces/notes.interface';
import { first } from 'rxjs';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CreateNotesComponent, ReadNotesComponent],
  templateUrl: './notes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {

  private notesService = inject(NotesService);

  public createNotes(formParams: INotes): void {
    this.notesService
      .postNotes(formParams)
      .pipe(first())
      .subscribe(() => {
        // this.notesService.notes$ = this.notesService.readNotes().pipe(
        //   delay(2000),
        //   catchError((error) => {
        //     console.log(error);
        //     this.error$.next(true);
        //     return of();
        //   })
        // );
      });
  }

}
