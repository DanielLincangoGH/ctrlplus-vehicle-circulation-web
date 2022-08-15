import { Observable } from 'rxjs';
import { RestrictionResponse } from './../interfaces/restriction.response';
import { EvaluateRestriction } from './../interfaces/evaluate.restriction';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestrictionService {
  constructor(private http: HttpClient) {}

  evaluateRestriction(
    plateId: string,
    evaluationDate: string
  ): Observable<RestrictionResponse> {
    let evaluateRestriction: EvaluateRestriction = {
      evaluationDate: evaluationDate,
    };
    return this.http.post<RestrictionResponse>(
      `${environment.apiUrl}/vehicle/restrictions/api/${plateId}/v1`,
      evaluateRestriction
    );
  }
}
