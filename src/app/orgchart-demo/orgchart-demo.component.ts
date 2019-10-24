import { Component, OnInit } from '@angular/core';
import { Staff } from '../model/staff';

import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-orgchart-demo',
  templateUrl: './orgchart-demo.component.html',
  styleUrls: ['./orgchart-demo.component.css']
})
export class OrgchartDemoComponent implements OnInit {

  parentNode: Staff;
  currentNode: Staff;
  childNodes: Array<Staff>;

  constructor(private apiService : UserProfileService) { }

  ngOnInit() {
    this.pupulateData();

    this.apiService.getUser("wsa\\uahmed").subscribe((res)=> {
      console.log(res);
    });
  }

  pupulateData()
  {
    this.parentNode = new Staff();

    this.parentNode.Name = "Ali Yasir Iqbal";
    this.parentNode.Designation = "Chief Technology Officer";

    this.currentNode = new Staff();

    this.currentNode.Name = "Agha Usman Ahmed";
    this.currentNode.Department = "ICT";
    this.currentNode.Designation = "Sofware Architect";
    this.currentNode.Phone = "08 6465466";
    this.currentNode.Email = "aghausman@gmail.com";


    let childNode1 = new Staff();

    childNode1.Name = "Naveed Saeed";
    childNode1.Designation = "SQA Engineer";

    let childNode2 = new Staff();

    childNode2.Name = "Abbas Mehdi";
    childNode2.Designation = "Software Engineer";


    let childNode3 = new Staff();

    childNode3.Name = "Muhammad Umair";
    childNode3.Designation = "Graphics Designer";


    this.childNodes = new Array<Staff>();

    this.childNodes.push(childNode1);
    this.childNodes.push(childNode2);
    this.childNodes.push(childNode3);


  }

}
