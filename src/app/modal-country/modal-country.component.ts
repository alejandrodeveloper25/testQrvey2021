import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-country',
  templateUrl: './modal-country.component.html',
  styleUrls: ['./modal-country.component.css']
})
export class ModalCountryComponent implements OnInit {
  @Input() countrySelected : any;
  @Input() activeModal = false;
  @Output() closeModal = new EventEmitter();
  @Output() activeFavorite = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  applyActiveModal = true;

  /**
   * Emisor de evento de cierre de
   * modal
   */
   close() {
    this.closeModal.emit({});
  }

  /**
   * Emisor de evento del click de
   * favoritos
   * @param action 
   */
  actionFavorite(action:any){
    this.activeFavorite.emit({action});
  }

}
