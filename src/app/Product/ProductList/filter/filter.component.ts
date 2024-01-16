import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent implements OnChanges {
  @Output() sortByPriceEvent = new EventEmitter<string | boolean>();
  @Output() sortByRatingEvent = new EventEmitter<string | boolean>();
  @Output() sortByUsageEvent = new EventEmitter<string | boolean>();
  @Output() sortByBrandEvent = new EventEmitter<string>();
  @Output() clearFilterEvent = new EventEmitter();

  @Input() brandNames: Array<string>;
  @Input() isFilterActive: boolean;

  filter = {
    price: 'default',
    rating: 'default',
    usage: 'default',
    brand: 'default',
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.filter);
  }

  sortPrice() {
    this.sortByPriceEvent.emit(this.filter.price);
    this.filter.rating = 'default';
  }
  sortRating() {
    this.sortByRatingEvent.emit(this.filter.rating);
    this.filter.price = 'default';
  }
  sortUsage() {
    this.sortByUsageEvent.emit(this.filter.usage);
  }
  sortBrand() {
    this.sortByBrandEvent.emit(this.filter.brand);
  }
  clearFilter() {
    this.filter = {
      price: 'default',
      rating: 'default',
      usage: 'default',
      brand: 'default',
    };
    this.clearFilterEvent.emit();
  }
}
