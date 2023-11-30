import { Injectable } from '@angular/core';

import * as Prismic from '@prismicio/client'

// DOCS https://prismic.io/docs/setup-vanilla-javascript

@Injectable({
  providedIn: 'platform'
})
export class PrismicService {

  public prismic = Prismic.createClient(
    'https://yangabrielportfolio.cdn.prismic.io/api/v2', {
    accessToken: "MC5aSnNUUFJFQUFDQUFzRUJh.77-9TWo877-977-977-977-977-977-977-9OQrvv73vv71C77-977-977-977-977-9cu-_ve-_ve-_vQPvv70iXWND77-9"
  })
  constructor() { }

}
