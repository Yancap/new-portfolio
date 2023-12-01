import { Component } from '@angular/core';
import { RichText } from 'prismic-dom';
import { Project } from 'src/app/models/Project';
import { ProjectFromAPI } from 'src/app/models/ProjectFromAPI';
import { PrismicService } from 'src/app/services/prismic.service';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [PrismicService]
})
export class ProjectComponent {
  public maxPage!: number;
  public currentPage: number = 1;
  public projects!: Project[];
  public currentProjects!: Project[];

  constructor(private service: PrismicService) {
    this.getProjects()
  }

  async getProjects() {
    const response = await this.service.prismic.getAllByType("project", { fetch: [], pageSize: 50 })
    const projects = response.map(resp => {
      const content = resp.data as ProjectFromAPI
      return {
        id: resp.uid,
        title: RichText.asText(content.title),
        text: content.text,
        techs: content.techs,
        image: { url: content.image.url },
        src: content.src.url || null,
        github: content.github.url || null,
        type: content.type,
        created_at: content.created_at
      }
    })
    this.projects = projects.filter(project => project.type === 'personal')
      .sort((project, p) => (project.created_at && p.created_at ? p.created_at - project.created_at  : 0))

    this.maxPage = Math.ceil(this.projects.length / 3)
    this.currentProjects = this.projects.slice(this.currentPage - 1, this.currentPage * 3)
  }

  onPrevPage() {
    this.currentPage--
    this.currentProjects = this.projects.slice((this.currentPage - 1) * 3, this.currentPage * 3)
  }
  onNextPage() {
    this.currentPage++;
    this.currentProjects = this.projects.slice((this.currentPage - 1) * 3, this.currentPage * 3)
  }
}
