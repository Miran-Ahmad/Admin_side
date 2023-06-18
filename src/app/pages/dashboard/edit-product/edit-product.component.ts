import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
  public productId;
  public productData;

  constructor(public route: ActivatedRoute, public apiService: ApiService) {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
      this.apiService.getProduct(this.productId).then((product) => {
        this.productData = product;
        console.log(this.productData);
      });
    });
  }
}