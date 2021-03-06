import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBlogs(){
    return this.http.get('https://digital-diary-bd.herokuapp.com/all-blogs')
  }

  getSingleBlog(blogId:any){
    return this.http.get('https://digital-diary-bd.herokuapp.com/blog/?blog_id='+blogId)
  }

}
