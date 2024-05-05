import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hubungi-kami',
  templateUrl: './hubungi-kami.component.html',
  styleUrls: ['./hubungi-kami.component.css']
})
export class HubungiKamiComponent {

  onSubmit() {
    const formData = new FormData();
    formData.append('name', (<HTMLInputElement>document.getElementById('name')).value);
    formData.append('number', (<HTMLInputElement>document.getElementById('number')).value);
    formData.append('email', (<HTMLInputElement>document.getElementById('email')).value);
    formData.append('message', (<HTMLInputElement>document.getElementById('message')).value);
  
    fetch('https://script.google.com/macros/s/AKfycbw6BmkmPeL05TyOrCnqbO75itiSizH3MFrdxg7dEp3O23mb7J1XeJZNUGQ6T3N0DqP9KA/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Formulir berhasil dikirim!');
        // Lakukan tindakan lanjutan setelah formulir berhasil dikirim
      } else {
        throw new Error('Terjadi kesalahan saat mengirim formulir.');
      }
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
      alert('Terjadi kesalahan saat mengirim formulir.');
    });
  }
}
