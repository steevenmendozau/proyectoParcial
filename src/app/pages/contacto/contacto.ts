import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {

  ngAfterViewInit() {
    const form = document.querySelector('.contact-form') as HTMLFormElement;
    const alertDiv = document.getElementById('contacto-alert');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        setTimeout(() => {
          alertDiv?.classList.remove('d-none');
          form.reset();
          setTimeout(() => alertDiv?.classList.add('d-none'), 6000); // ahora la alerta dura más tiempo
        }, 700);
      });
    }
  }
}
