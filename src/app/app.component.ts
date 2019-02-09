import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  @ViewChild('msg') value: ElementRef;//child component, but not reusable, to make it usable we need to make directive.

  ngOnInit(){
    console.log("from init");
  }

  ngAfterViewInit(){
    this.value.nativeElement.innerText="this is hello";
  }
}
