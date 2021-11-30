import React from 'react';
import {shallow} from 'enzyme';
import Showcase from "../Showcase";
import store from "../../../Store/store";
import {Provider} from "react-redux";

describe('<Showcase /> tests', () => {
    it('should render <Showcase />', function () {
        const showcase = shallow(<Provider store={store}><Showcase/></Provider>);

        expect(showcase).toMatchSnapshot();
    });
})