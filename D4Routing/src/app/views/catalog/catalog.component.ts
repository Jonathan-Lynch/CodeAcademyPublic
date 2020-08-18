import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  template: `
    <h1>Catalog {{id}}</h1>
  `,
})
export class CatalogViewComponent {
  id: string;
  readonly CatalogId = 'catalogId';
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params[this.CatalogId];
  }
}
