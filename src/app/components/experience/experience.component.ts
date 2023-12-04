import { Component } from '@angular/core';
import { Experience } from 'src/app/models/Experience';
import { ExperienceDataFomatter } from 'src/app/models/ExperienceDataFomatter';
import { PrismicService } from 'src/app/services/prismic.service';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  public experience!: ExperienceDataFomatter[];
  constructor(private service: PrismicService) {
    this.getExperience();
  }

  async getExperience() {
    const response = await this.service.prismic.getAllByType('experience', {
      fetch: [],
      pageSize: 50,
    });
    console.log(response);

    const dataOrdened = response.sort((current: {data: any}, next: {data: any},) =>
     new Date(current.data.end_date).getTime() -
     new Date(next.data.end_date).getTime()
    );

    const dataAggregator: ExperienceDataFomatter[] = [];

    dataOrdened.forEach((resp: any) => {
      const { data } = resp as { data: Experience };
      const dataFormatter: ExperienceDataFomatter =
        {} as ExperienceDataFomatter;
      dataFormatter.company = data.company;
      dataFormatter.jobs = [
        {
          employ: data.employ,
          description: data.description,
          techs: data.techs,
          start_date: data.start_date,
          end_date: data.end_date,
        },
      ];

      if (dataAggregator.length > 0) {
        const index = dataAggregator.findIndex(
          (dt) => data.company === dt.company
        );
        if (index !== -1) {
          dataAggregator[index].jobs.push(dataFormatter.jobs[0]);
          return;
        }
      }
      dataAggregator.push(dataFormatter);
    });

    this.experience = dataAggregator;
  }
}
