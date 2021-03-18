import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  @Input() baseUrl: string = 'www.pawellesniwoski.com'
  @Input() hashTags: string[] = ['#pawellesniwoski', '#javascript', '#Angular'];

  public constructor(private titleService: Title, private router: Router) { }

  public get title(): string {
    return this.titleService.getTitle();
  }

  public createMessage() {
    return encodeURIComponent(`Check out my website ${this.title} at ${this.baseUrl}!!! ${this.hashTags.join(' ')} route:::${this.router.url}}`)
  }

  ngOnInit(): void {
    console.log(this.createMessage());
    console.log('route: ', this.router.url);
  }

}
