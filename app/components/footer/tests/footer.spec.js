import React from 'react';
import { mount } from 'enzyme';
import { Footer } from '../src/footer';

jest.mock("../src/footer.scss", () => jest.fn());

const init = () => mount(<Footer />);
const setup = {
    enzymeWrapper: {}
};

describe('Footer', function () {
    beforeEach(function () {
        setup.enzymeWrapper = init();
    });

    it('should render the footer', function () {
        expect(setup.enzymeWrapper.find('footer').hasClass('container')).toBe(true);
    });

    it('should render the paragraph with text "Footer"', function () {
        expect(setup.enzymeWrapper.find('p').text()).toBe('Footer');
    });
});