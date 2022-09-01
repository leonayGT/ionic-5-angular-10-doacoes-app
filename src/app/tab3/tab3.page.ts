import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  enviar() {
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;
    window
      .open(
        `https://api.whatsapp.com/send?phone=5531992128622&text=Ola%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes...Me%20chamo%20${nome}%20e%20moro%20no%20endereço%20${endereco} `,
        '_blank'
      )
      .focus();
  }

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }
}
