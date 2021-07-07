import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {


  blog$:any;

  constructor(private data: DataService,private route:ActivatedRoute) { 
    this.route.params.subscribe( params => this.blog$ = params.id)
  }

  ngOnInit() {
    this.data.getSingleBlog(this.blog$).subscribe(
      data=>this.blog$ = data
    )
  }

}
