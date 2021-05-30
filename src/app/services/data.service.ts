import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from, Observable } from 'rxjs';
import { Communication, Patient } from '../models/communication.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore, private _snackBar: MatSnackBar) {}

  add(
    data: Communication | Patient,
    collection: 'communications' | 'patients'
  ): Observable<any> {
    return from(this.db.collection(collection).add(data));
  }

  update(
    updateData: Communication | Patient,
    dataSrc: any,
    collection: 'communications' | 'patients'
  ): Observable<any> {
    return from(
      this.db
        .collection(collection)
        .doc(dataSrc.payload.doc.id)
        .set(updateData, { merge: true })
    );
  }

  delete(
    data: any,
    collection: 'communications' | 'patients'
  ): Observable<any> {
    return from(
      this.db.collection(collection).doc(data.payload.doc.id).delete()
    );
  }

  getAll(collection: 'communications' | 'patients'): Observable<any[]> {
    return this.db.collection(collection).snapshotChanges();
  }

  getEconomicalCommunications(): Observable<any[]> {
    return from(
      this.db
        .collection('communications', (ref) =>
          ref.where('topic', '==', 'Economical')
        )
        .snapshotChanges()
    );
  }

  getPropertyValue(data: any, property: string): any {
    return data.payload.doc.data()[property];
  }
}
