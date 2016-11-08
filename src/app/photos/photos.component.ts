import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PhotosComponent implements OnInit {

  filters: Object[];
  filtersForm: FormGroup;
  appliedFiters;

  constructor(private fb: FormBuilder) {
    this.filtersForm = fb.group(
      {
        sepia: [false],
        contrast: [false],
        saturate: [false],
        'hue-rotate': [false],
      }
    )
  }

  ngOnInit() {
    this.filters = [
      {selected: false, name: 'sepia', value: '5%'},
      {selected: false, name: 'contrast', value: '300%'},
      {selected: false, name: 'saturate', value: '5'},
      {selected: false, name: 'hue-rotate', value: '200deg'},
    ];

    this.filtersForm.valueChanges
      .subscribe((o) => {
        this.appliedFiters = Object.keys(o)
          .filter((x) => {
            return o[x]
          })
        .map((x) => {
          const selectedFilter = this.filters.filter(f => f.name === x)[0];
          return `${x}(${selectedFilter.value})`;
        })
        .join(' ');
        console.log(this.appliedFiters)
      })
  }
}
