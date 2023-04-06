import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "./product.state";


@Injectable({providedIn:"root"})
export class EventDriverService {
   sourceEventSubject:Subject<ActionEvent> = new Subject<ActionEvent>(); // creation de Subject
   sourceEventSubjectObserable=this.sourceEventSubject.asObservable(); // sourceEventSubjectObserable a partir de Subject



   publishEvent(event:ActionEvent){

   }
}
