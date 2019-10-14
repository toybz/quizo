import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import random from "@angular-devkit/schematics/src/rules/random";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {AlertController, LoadingController} from "@ionic/angular";


@Component({
  selector: "app-sign-up-page",
  templateUrl: "./sign-up-page.page.html",
  styleUrls: ["./sign-up-page.page.scss"]
})
export class SignUpPagePage implements OnInit {
  test_user = 'user'+ Math.floor(Math.random()*999)
  user = {
    username:this.test_user ,
      password:'12345',
      email: this.test_user+'@gmail.com'
  }
  constructor(private userService: UserService, private route: Router, private localStorage:LocalStorageService ,  public loadingController: LoadingController, public alertController: AlertController) {}

  ngOnInit() {}

    async  registerUser(){

      const loading = await this.loadingController.create({
            message: 'Please Wait...' ,
            backdropDismiss: false
        });

        await loading.present();



      let tr =   this.userService.registerUser(this.user)

        tr.subscribe(
          async  (new_user:any)=>{
              new_user.user.signed_in = true
           this.localStorage.saveUser(new_user.user)
              loading.dismiss();

           /*   Swal.fire({
                text: "Registration Successful"
            })
*/


       const alert = await this.alertController.create({
           message: 'Registration Successful'
       });
       await alert.present();

         setTimeout( ()=> {
             alert.dismiss()
             this.route.navigate(['/tabs/dashboard'])

         } , 2000)





          }
      )



    }


}
