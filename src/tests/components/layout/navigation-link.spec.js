import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import NavigationLink from '../../../components/layout/navigation-link';

it('renders without crashing', () => {
  const props = {
    index: false,
    onlyActiveOnIndex: false,
    to: 'test/location',
    IconComponent: 'span',
  };
  const component = mount(
    <NavigationLink {...props}/>, {
      context: {
        router : {
          isActive: (to, onlyActiveOnIndex) => { return true; },
          push: () => { },
          replace: () => { },
          go: () => { },
          goBack: () => { },
          goForward: () => { },
          setRouteLeaveHook: () => { },
          createHref: () => { },
        } 
      }
    }
  );
});
