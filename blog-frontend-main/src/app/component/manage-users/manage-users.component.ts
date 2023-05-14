import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostapiService } from 'src/app/service/postapi.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
  users:any;

  loginStatus:any=localStorage.getItem("loginStatus");
  userRole:any=localStorage.getItem("userRole");
  constructor(private service:PostapiService,private router:Router)
  {
    this.service.getAllUsers().subscribe(
      response => {
        console.log(response);
        this.users=response;
      }
    );

  }

  deleteUser(userId:any)
  {
    if(confirm('Do you really want to delete this User?'))
    {
    this.service.deleteUserById(userId).subscribe(//check
      response => { alert("User has been deleted");
     // window.location.reload();
      }
    );
    }
  }


  logout()
  {
    localStorage.clear();
    this.router.navigate(['signin']);
    
  }
}
