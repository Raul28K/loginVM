import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  // Credenciales válidas (en un caso real, esto estaría en el backend)
  private readonly VALID_CREDENTIALS = {
    username: 'Admin',
    password: '1234'
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    if (this.validateCredentials()) {
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
      // Opcional: limpiar el campo de contraseña
      this.password = '';
    }
  }

  private validateCredentials(): boolean {
    return this.username === this.VALID_CREDENTIALS.username && 
           this.password === this.VALID_CREDENTIALS.password;
  }
}
