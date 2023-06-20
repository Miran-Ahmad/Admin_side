import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss'],
})
export class EditProductsComponent {
  public productId;
  public productData;
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    author: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    price: new FormControl(null, [Validators.required]),
  });

  constructor(public apiService: ApiService, public route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe((param) => {
      this.productId = param['id'];
      this.apiService.getProduct(this.productId).then((product) => {
        this.productData = product;
      });
    });
  }

  public async update() {
    if (this.form.invalid) {
      alert('form is invalid');
      return;
    }

    console.log(this.form.value);
    this.apiService
      .updateProduct(this.productId,this.form.value)
      .then(() => {
        console.log('data updated successfully');
        this.router.navigateByUrl('/')
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public get name(): AbstractControl {
    return this.form.controls['name'];
  }
  public get author(): AbstractControl {
    return this.form.controls['author'];
  }
  public get description(): AbstractControl {
    return this.form.controls['description'];
  }
  public get price(): AbstractControl {
    return this.form.controls['price'];
  }
}
