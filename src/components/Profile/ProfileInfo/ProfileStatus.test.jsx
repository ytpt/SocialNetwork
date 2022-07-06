import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
    test('Status from props should be in the state', () => {
        const button = create(<ProfileStatus  status='it-kamasutra.com'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamasutra.com');
    })

    test('After creation span status should be displayed with correct status', () => {
        const button = create(<ProfileStatus  status='it-kamasutra.com'/>);
        const instance = component.getInstance();
        let span = instance.findByType('span');
        expect(span.length).toBe(1);
    })
})