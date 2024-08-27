import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
} from "@angular/core";
import { NotesService } from "../../../_services/notes.service";
import { CommonModule } from "@angular/common";
import { catchError, delay, Observable, of, Subject } from "rxjs";
import { INotes } from "../../../_interfaces/notes.interface";

@Component({
  selector: "app-read-notes",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./read-notes.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadNotesComponent implements OnInit {
  @Input() public getNotes!: Observable<INotes[]>;

  public notes$!: Observable<INotes[]>;
  public error$ = new Subject<boolean>();

  public notesService = inject(NotesService);

  ngOnInit(): void {
    console.log("###", this.getNotes);

    this.notes$ = this.notesService.getNotes().pipe(
      delay(2000),
      catchError((error) => {
        console.log(error);
        this.error$.next(true);
        return of();
      })
    );
  }
}
