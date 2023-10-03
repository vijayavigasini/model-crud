import { Component ,OnInit } from '@angular/core';
import { ApiService} from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  data: any;
  constructor(private service: ApiService){

  }
  ngOnInit()
{
  this.getData();
}

getData(){
  this.service.getData().subscribe(res=> {
    this.data=res;
    console.log(this.data);
  })
}
}
