import {
  compose,
  mapProps,
  renderComponent,
  defaultProps,
  branch,
} from 'recompose';
import LoadingIndicator from '../LoadingIndicator';

export const loadingHoc = ({ size }) => compose(
  mapProps(() => null),
  defaultProps({ size }),
  renderComponent(LoadingIndicator),
);

export default ({ condition, size }) => compose(
  branch(
    condition,
    loadingHoc({ size }),
  ),
);
