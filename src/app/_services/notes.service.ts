import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { INotes } from '../_interfaces/notes.interface';
import { HttpClient } from '@angular/common/http';
import { urlConfig } from '../_config/url.config';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public http = inject(HttpClient);

  public createNotes(notes: INotes): Observable<INotes> {
    return this.http.post<INotes>(urlConfig.notesAPI, notes).pipe(
      map((value) => value)
    )
  }
}
