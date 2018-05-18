import { Component, OnInit } from '@angular/core';
import { RetrieveDataService } from '../../services/retrieve-data.service';

@Component({
  selector: 'app-badfetch',
  templateUrl: './badfetch.component.html',
  styleUrls: ['./badfetch.component.css']
})
export class BadfetchComponent implements OnInit {
  methodResponse: any[];
  hideDropCalls: boolean;

  constructor(private service: RetrieveDataService) {
    this.hideDropCalls = true;
   }

  ngOnInit() {
  }

  public getBadfetchCalls() {
    try {
      this.service.getBadfetchCalls().subscribe(
        (data) => {
          if (data != null) {
            this.methodResponse = data
            this.hideDropCalls = false;
          }
          else{
            throw DOMException;
          }

        }
      );
    }
    catch{
      alert('there is an issue in retrieving data from bad fetch calls');
    }
  }

}
