import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { querySelector } from '../../../test';
import { BootstrapComponent } from '../components';

describe('Bootstrap component', () => {
    let component: BootstrapComponent;
    let fixture: ComponentFixture<BootstrapComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BootstrapComponent,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BootstrapComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    describe('when the view has been loaded', () => {
        it ('there should be a site tag', () => {
            const routerOutletElementMenu = querySelector(fixture, 'cls-site');

            expect(routerOutletElementMenu).toBeTruthy();
        });
    });
});
