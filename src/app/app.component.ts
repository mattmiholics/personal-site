import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Matt Miholics';
  
  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'Personal Portfolio site for Matt Miholics' },
      { name: 'keywords', content: 'angular, javascript, typescript, meta, seo' }  
    ]); 
  }
}

