# Project Organization

This project expands upon the application organization paradigm described in Alex Mangin's articles ["How to better organize your React applications?"](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1#.w4pjso43c) and ["How to use Redux on highly scalable javascript application?"](https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38#.ttn878sh9). The below documentation is adapted (sometimes verbatim) from his writings.

The application contains three high-level _features_:

0. components
0. scenes
0. services

Each feature - component, scene or service - should contain everything it needs to operate: logic such as reducers, actions, etc.; images and other static assets; and unit and integration tests.

**Rules**

- A component can define nested components or services. It cannot use or define scenes.
- A scene can define nested components, scenes or services.
- A service can define nested services. It cannot use or define components or scenes.
- Nested features can only use other entities that are defined by a parent entity.
