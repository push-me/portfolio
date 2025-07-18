import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SvgIconService {

  constructor(private http: HttpClient) { }

  getSvg(iconName: string): Observable<string> {
    const url = `assets/icons/${iconName}.svg`; // Build the URL to the SVG file
    return this.http.get(url, { responseType: 'text' }); // Fetch the SVG content as text
  }
}
