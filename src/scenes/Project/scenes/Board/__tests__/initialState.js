import Immutable from 'immutable';

export default Immutable.List([
  Immutable.Map({
    id: 1,
    name: 'Define Problem',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 2,
    name: 'Prepare Data',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 3,
    name: 'Model Factory',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 4,
    name: 'Tune Algorithms',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
  Immutable.Map({
    id: 5,
    name: 'Visualize',
    elements: Immutable.List([
      Immutable.Map({ key: 1, id: 1, title: 'Title 1', content: 'Content 1' }),
      Immutable.Map({ key: 2, id: 2, title: 'Title 2', content: 'Content 2' }),
      Immutable.Map({ key: 3, id: 3, title: 'Title 3', content: 'Content 3' }),
    ]),
  }),
]);
