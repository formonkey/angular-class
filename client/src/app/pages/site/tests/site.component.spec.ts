import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteComponent } from '../components';
import { querySelector } from '../../../../test';

describe('Site component', () => {
    let component: SiteComponent;
    let fixture: ComponentFixture<SiteComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SiteComponent,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(SiteComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it ('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    describe('when the view has been loaded', () => {
        it ('there should be a tag h2 with the text "Site"', () => {
            const element = querySelector(fixture,'h2');

            expect(element).toBeTruthy();
            expect(element.textContent).toEqual('Site');
        });

        it ('there should be a cls-blog tag after the h2 tag', () => {
            const routerOutletElement = querySelector(fixture, 'h2 + cls-blog');

            expect(routerOutletElement).toBeTruthy();
        });
    });
});
