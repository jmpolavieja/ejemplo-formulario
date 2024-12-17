import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-dinamico',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './form-dinamico.component.html',
  styleUrl: './form-dinamico.component.css'
})
export class FormDinamicoComponent {

  private formBuilder = inject(FormBuilder);


  profileForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellidos: [''],
    direccion: this.formBuilder.group({
      calle: [''],
      localidad: [''],
      provincia: [''],
      codPostal: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.controls.push(this.formBuilder.control(''));
  }

  onSubmit(){
    const i = this.aliases.controls.length;
    for(let j=0;j<i;j++){
      console.log(this.aliases.controls[j]);

    }



  }
}
