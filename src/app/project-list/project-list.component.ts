import { Component, OnInit } from '@angular/core';

import projects from './projects.json'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList:{name:String,skills:[String],imageSlides:{pic1ID:String,pic2ID:String,pic3ID:String},picID:String,description:String,githubLink:String}[]=projects;
  showModal:boolean=false;
  constructor() { }

 modalIndex=0;

  ngOnInit(): void {
    this.showModal=false;
  }

  setModalIndex(index:number){
    this.modalIndex=index;
  }


}
