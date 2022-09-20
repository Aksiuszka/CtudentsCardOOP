export default class InputModel {
  constructor({ key, value }) {
    this.value = value;
    this.name = key;
    this.getLabel();
  }

  getLabel() {
    switch (this.name) {
      case 'firstName':
        this.label = 'Imie';
        this.type = 'text';
        break;
      case 'lastName':
        this.label = 'Nazwisko';
        this.type = 'text';
        break;
      case 'pesel':
        this.label = 'Pesel';
        this.type = 'number';
        break;
      case 'startDate':
        this.label = 'Start';
        this.type = 'date';
        break;
      case 'faculty':
        this.label = 'Kierunek';
        this.type = 'text';
        break;
      case 'album':
        this.label = 'Nr albumu';
        this.type = 'number';
        break;
      default:
        this.label = '';
        this.type = '';
        break;
    }
  }
}
