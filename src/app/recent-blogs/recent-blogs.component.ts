import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recent-blogs',
  templateUrl: './recent-blogs.component.html',
  styleUrls: ['./recent-blogs.component.scss']
})
export class RecentBlogsComponent implements OnInit {

  blogs$: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBlogs().subscribe(
      data => this.blogs$ = data
    )
  }

}
