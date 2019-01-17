import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "http-awesome";
  data = [];
  imgUrl = [];
  myForm;
  dogGetReq = this.http.get("https://dog.ceo/api/breeds/image/random/30");
  constructor(private http: HttpClient, private fBuilder: FormBuilder) {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (data: any) => {
        console.log(data);
        this.data = data;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log("Request is processed");
      }
    );

    this.dogGetReq.subscribe(
      (data: any) => {
        console.log(data);
        this.imgUrl = data.message;
      },
      err => {
        console.log(err);
      },
      () => {}
    );

    this.myForm = this.fBuilder.group({
      title: [],
      body: []
    });
  }

  sendData() {
    this.http
      .post("https://jsonplaceholder.typicode.com/posts", this.myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}
