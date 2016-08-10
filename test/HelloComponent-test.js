import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HelloComponent from './../src/HelloComponent.js';

describe("HelloComponent", function() {
    it("should show 'Hello World!' on init", function() {
        //prepare
        const expectHelloText = 'Hello World!'

        //execute (render)
        const actualHelloText = shallow(<HelloComponent/>).find('#helloText').text()

        //expect    
        expect(actualHelloText).toBe(expectHelloText)

    });

    it("should show 'Hello Nhựt' on click Hello button", function() {
        //prepare
        const expectHelloText = 'Hello Nhựt!'

        //execute (render)
        const wrapper = shallow(<HelloComponent/>)
        wrapper.find('#helloBtn').simulate('click')
        const actualHelloText = wrapper.find('#helloText').text()

        //expect    
        expect(actualHelloText).toBe(expectHelloText)

    });
});
