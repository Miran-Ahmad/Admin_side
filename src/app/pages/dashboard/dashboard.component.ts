import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public data: any;
  constructor(public apiService: ApiService) {
    this.getData().then((products) => {
      console.log(products);
    });
  }

  public async getData() {
    this.data = await this.apiService.getProducts();
    return this.data;
  }
}
