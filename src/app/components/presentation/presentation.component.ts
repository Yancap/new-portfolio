import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PrismicService } from 'src/app/services/prismic.service';
import { RichText } from 'prismic-dom'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  providers: [PrismicService]
})
export class PresentationComponent implements AfterViewInit{

  @ViewChild("aboutMe") elementDiv!: ElementRef<HTMLDivElement>;

  constructor(private service: PrismicService, private route: ActivatedRoute) {}

  ngAfterViewInit(){
    const aboutMe = this.route.snapshot.data["aboutMe"]
    console.log(aboutMe);
    this.elementDiv.nativeElement.innerHTML = aboutMe
  }

  async getInfoAboutMe(aboutMe: string) {
    this.elementDiv.nativeElement.innerHTML = aboutMe
  }
}
