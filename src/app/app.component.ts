import { Component } from '@angular/core';
import { CrudService } from "./service/crud.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wezentv3';

  user : string;
  name : string;
  message : string;

  constructor(public curdservice:CrudService){}

  CreateRecord()
  {
    let Record = {};
    Record['name'] = this.name;

    this.curdservice.create_newOne(Record).then(res => {
      this.name = "";
      console.log(res);
      this.message = "done"
    }).catch(error => {
      console.log(error);
    });

  }

}
