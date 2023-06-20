import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss'],
})
export class CreateProductsComponent {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    author: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    price: new FormControl(null, [Validators.required]),
  });

  constructor(public apiService: ApiService, public router: Router) {}

  public async submit() {
    if (this.form.invalid) {
      alert('form is invalid');
      return;
    }

    console.log(this.form.value);
    this.apiService
      .addProducts(this.form.value)
      .then(() => {
        console.log('data added successfully');
        this.router.navigateByUrl('/');
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
