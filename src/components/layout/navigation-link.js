import React from 'react';
import { Link, IndexLink } from 'react-router';

class NavigationLink extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
  };

  render() {
    const { router } = this.context;
    const { index, onlyActiveOnIndex, to, children, IconComponent, ...props } = this.props;

    const isActive = router.isActive(to, onlyActiveOnIndex);
    const LinkComponent = index ? Link : IndexLink;

    return (
      <li className={isActive ? 'active' : '' }>
        <IconComponent/>
        <LinkComponent to={to}>
          {children}
        </LinkComponent>
      </li>
    );
  }
}

export default NavigationLink;
