import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlogComponent } from '../components';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { querySelector } from '../../../../test';

describe('Blog component', () => {
    let component: BlogComponent;
    let fixture: ComponentFixture<BlogComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BlogComponent,
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(BlogComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it ('when the component has been created there should be an instance of it in the component variable', () => {
        expect(component).toBeDefined();
    });

    describe( 'when the view has been loaded', () => {
        it ('there should be a tag h3 with text "Blog"', () => {
            const element = querySelector(fixture, 'h3');

            expect(element).toBeTruthy();
            expect(element.textContent).toEqual('Blog');
        });
    });
});
