import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Sortable from 'sortablejs';
interface Project {
  id: number;
  config: any;
}

console.log(Sortable);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  projects: any;
  sortablejsOptions: any = {
    animation: 150, dragClass: 'card-body', handle: '.glyphicon-move',
  };
  @ViewChildren('test') components: QueryList<any>;
  @ViewChild('test1') test1;
  constructor(private http: HttpClient) {


    this.sortablejsOptions = {
      onUpdate: (event: any) => {
        //console.log(event);
      },
      onStart: function (evt) {
        console.log(evt);
      }
    };
 
  }

  ngAfterViewInit() {


    Sortable.create(this.test1.nativeElement, {
      handle: '.card-body',
      animation: 150,
      onUpdate: (event: any) => {
        //console.log(event);
      },
      onStart: function (evt) {
        console.log(evt);
      }
    });
    // print array of CustomComponent objects
    console.log(this.components.toArray());
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
    //assets/data/projects.json
    this.http.get<any>('https://qualityprocess-development.herokuapp.com/api/v1/projects', httpOptions).subscribe(data => this.projects = data);
  }

}
