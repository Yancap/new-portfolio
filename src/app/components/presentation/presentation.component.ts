import { Component, ViewChild, ElementRef } from '@angular/core';
import { PrismicService } from 'src/app/services/prismic.service';
import { RichText } from 'prismic-dom'

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  providers: [PrismicService]
})
export class PresentationComponent {

  @ViewChild("aboutMe") elementDiv!: ElementRef<HTMLDivElement>;

  constructor(private service: PrismicService) {
    this.getInfoAboutMe();
  }

  async getInfoAboutMe() {
    const response = await this.service.prismic.getAllByType("about", { fetch: [], pageSize: 50 })
    const [about] = response.map((resp) => {
      return {
        text: RichText.asHtml(resp.data['text'])
          .replace(/<strong>/g, "<strong class='emphasis'>")
      }
    })
    this.elementDiv.nativeElement.innerHTML = about.text
    console.log(about);
  }
}
