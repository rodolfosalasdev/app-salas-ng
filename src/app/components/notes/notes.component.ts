import { NotesService } from "./../../_services/notes.service";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CreateNotesComponent } from "./create-notes/create-notes.component";
import { ReadNotesComponent } from "./read-notes/read-notes.component";
import { INotes } from "../../_interfaces/notes.interface";
import { catchError, delay, first, Observable, of, Subject } from "rxjs";

@Component({
  selector: "app-notes",
  standalone: true,
  imports: [CreateNotesComponent, ReadNotesComponent],
  templateUrl: "./notes.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent {
  public error$ = new Subject<boolean>();
  public notes$!: Observable<INotes[]>;

  private notesService = inject(NotesService);

  public createNotes(formParams: INotes): void {
    this.notesService
      .postNotes(formParams)
      .pipe(first())
      .subscribe(() => {
        // this.notes$ = this.notesService.getNotes().pipe(
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
