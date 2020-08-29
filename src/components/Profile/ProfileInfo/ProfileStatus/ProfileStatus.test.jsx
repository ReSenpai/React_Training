import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';


describe('ProfileStatus component', () => {
    
    const createComponent = () => create(<ProfileStatus status='Hello friend' />);
    
    test('status sent to the props should be in the state', () => {
        const instance = createComponent().getInstance();
        expect(instance.state.status).toBe("Hello friend");
    });
    test('After create component, <span> should be display.', () => {
        const span = createComponent().root.findByType('span');
        expect(span.type).toBe('span');
    });
    test('<input> should be displayed in editMode instead of span', () => {
        const root = createComponent().root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('Hello friend');
        expect(() => {
            root.findByType('span');
        }).toThrow();
    });
    test(`After create component, <input> don't should be display.`, () => {
        expect(() => {
            createComponent().root.findByType('input');
        }).toThrow();
    });
    test('Once the components are created, the span will show the correct status.', () => {
        const root = createComponent().root;
        const span = root.findByType('span');
        expect(span.children[0]).toBe('Hello friend');
    });
    test('Callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus 
            status='Hello friend' 
            updateUserStatus={ mockCallback } />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback).toBeCalledTimes(1);
    });
});