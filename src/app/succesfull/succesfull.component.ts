import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succesfull',
  templateUrl: './succesfull.component.html',
  styleUrls: ['./succesfull.component.css']
})
export class SuccesfullComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
continue(){
this.router.navigate(['/continue']);
}
}
