import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() sortByPriceEvent = new EventEmitter<string>();
  @Output() sortByRatingEvent = new EventEmitter<string>();
  @Output() sortByUsageEvent = new EventEmitter<string>();
  @Output() sortByBrandEvent = new EventEmitter<string>();
  @Output() clearFilterEvent = new EventEmitter<string>();

  @Input() brandNames: Array<string>;
  @Input() isFilterActive: boolean;

  sortPrice(type: string) {
    this.sortByPriceEvent.emit(type);
  }
  sortRating(type: string) {
    this.sortByRatingEvent.emit(type);
  }
  sortUsage(type: string) {
    this.sortByUsageEvent.emit(type);
  }
  sortBrand(name: string) {
    this.sortByBrandEvent.emit(name);
  }
  clearFilter() {
    this.clearFilterEvent.emit();
  }
}
