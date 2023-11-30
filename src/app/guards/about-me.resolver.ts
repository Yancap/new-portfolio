import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PrismicService } from '../services/prismic.service';
import { RichText } from 'prismic-dom';

export const aboutMeResolver: ResolveFn<string> = async (route, state) => {
  const service = inject(PrismicService)
  const response = await service.prismic.getAllByType("about", { fetch: [], pageSize: 50 })
  const [about] = response.map((resp) => {
    return {
      text: RichText.asHtml(resp.data['text'])
        .replace(/<strong>/g, "<strong class='emphasis'>")
    }
  })
  return about.text;
};
