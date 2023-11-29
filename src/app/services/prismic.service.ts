import { Injectable } from '@angular/core';

import { createClient } from '@prismicio/client/*';

// DOCS https://prismic.io/docs/setup-vanilla-javascript

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  public client: any;
  constructor() {
    this.client = createClient("")
  }
}
