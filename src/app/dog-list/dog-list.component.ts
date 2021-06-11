import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';



@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  title = 'Dog List';
  dogs = [];
  // dogs: this.getAll();
  constructor(private dogsService: DogsService) {
     
    console.log(this.dogs);
  }
  ngOnInit(): void {
    this.getUpdates();
  }
  getUpdates(){
    return this.dogsService.all().subscribe(data => this.dogs = data);
  }

  getAll(){
    this.dogs = this.dogsService.all();
   }
}
