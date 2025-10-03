import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-create-module',
  imports: [CommonModule, 
    ReactiveFormsModule, 
    TableModule, 
    InputTextModule, 
    CheckboxModule, 
    ButtonModule],
  templateUrl: './create-module.html',
  styleUrl: './create-module.css'
})


export class CreateModule implements OnInit {
    moduleFormGroup: FormGroup<any>;

    constructor(private fb: FormBuilder) {
        this.moduleFormGroup = this.fb.group({
        modules: this.fb.array([this.createModule()])
        });
    }

    ngOnInit(): void {
        
    }

    createModule(): FormGroup<any> {
        return this.fb.group({
        moduleName: ['', Validators.required],
        moduleLogo: ['', Validators.required],
        isActive: [false]
        });
    }

    get modules(): FormArray<any> {
        return this.moduleFormGroup.get('modules') as FormArray<any>;
    }

    addModule(): void {
        this.modules.push(this.createModule());
    }

    removeModule(index: number): void {
        if (this.modules.length > 1) {
        this.modules.removeAt(index);
        }
    }

    onSubmit(): void {
        console.log(this.moduleFormGroup.value.modules);
        this.moduleFormGroup.reset()
    }
}