import { Component } from '@angular/core';
import { Tech } from 'src/app/models/Tech';
import { PrismicService } from 'src/app/services/prismic.service';

@Component({
  selector: 'ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss'],
  providers: [PrismicService]
})
export class AbilityComponent {

  public advanced: Tech[] = [];
  public intermediary: Tech[] = [];
  public basic: Tech[] = [];

  constructor(private service: PrismicService) {
    this.getSkills()
  }

  async getSkills() {
    const response = await this.service.prismic.getAllByType("tech", { fetch: [], pageSize: 50 })

    response.map(item => {
      if(item.data["level"] === "advanced") {
        this.advanced.push(item.data as Tech)
      } else if(item.data["level"] === "intermediary") {
        this.intermediary.push(item.data as Tech)
      } else {
        this.basic.push(item.data as Tech)
      }
    })

    this.advanced
      .sort((data, b) => data.order && b.order ? data.order - b.order: 0 )
    this.intermediary
      .sort((data, b) => data.order && b.order ? data.order - b.order: 0 )
    this.basic
      .sort((data, b) => data.order && b.order ? data.order - b.order: 0 )
  }
}
