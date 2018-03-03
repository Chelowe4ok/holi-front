import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent } from 'angular2-grid';

interface Project {
  id: number;
  config: any;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any;
  sortablejsOptions: any = { animation: 150 };

  constructor(private http: HttpClient) {

    this.sortablejsOptions = {
      onUpdate: (event: any) => {
        console.log(event);
      }
    };
 
  }

  getDate(date) {
    let dateObj = new Date(date);
    return `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'authkey',
        'userid': '1'
      })
    };

    this.http.get<any>('assets/data/projects.json', httpOptions).subscribe(data => this.projects = data);
  }

}
