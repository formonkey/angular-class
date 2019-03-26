import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component ({
    selector: 'cls-form',
    templateUrl: './form.component.html',
    styleUrls: [ './form.component.scss' ],
})

export class FormComponent implements OnInit{
    public form: FormGroup;

    constructor( private readonly fb: FormBuilder ) {}

    public ngOnInit(): void {
       this.form = this.fb.group({
           username: [ 'Noelia Villa', [Validators.required]],
           email: [ '', [Validators.required]],
       })
    }


}
