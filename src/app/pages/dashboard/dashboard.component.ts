import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public data: any;
  constructor(public apiService: ApiService, public router: Router) {
    this.getData().then((products) => {
      console.log(products);
    });
  }

  public async getData() {
    this.data = await this.apiService.getProducts();
    return this.data;
  }
  public async delData(pid) {
    this.apiService
      .delProduct(pid)
      .then(() => {
        this.getData();
        this.router.navigate(['']);
        // alert('The item has been Deleted!');
      })
      .catch((err) => {
        alert('' + err);
      });
  }
}