import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public apiService:ApiService){
this.getData()
  }

  async getData(){
    const productData = await this.apiService.getAllData();
    console.log(productData);
    
  }

}
