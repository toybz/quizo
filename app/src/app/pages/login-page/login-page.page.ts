import { Component, OnInit } from "@angular/core";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {AlertController, LoadingController} from "@ionic/angular";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.page.html",
  styleUrls: ["./login-page.page.scss"]
})
export class LoginPagePage implements OnInit {


    user = {
        username: 'toybz' ,
        password:'12345',
        email: 't@mail.com'
    }
    constructor(private userService: UserService, private route: Router, private localStorage:LocalStorageService ,  public loadingController: LoadingController, public alertController: AlertController) {}

    ngOnInit() {}

    async  login(){

        const loading = await this.loadingController.create({
            message: 'Please Wait...' ,
            backdropDismiss: false
        });

        await loading.present();



        let tr =   this.userService.loginUser(this.user)

        tr.subscribe(
            async  (user:any)=>{
                user.user.signed_in = true
                this.localStorage.saveUser(user.user)
                loading.dismiss();

                /*   Swal.fire({
                     text: "Registration Successful"
                 })
     */


                const alert = await this.alertController.create({
                    message: 'Login Successful'
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
