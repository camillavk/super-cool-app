# Super Cool App

## Week One

### Initial steps to build the React App:

```
npm i -g create-react-app
npm i -g @storybook/cli
create-react-app super-cool-app
cd super-cool-app
getstorybook
```
(initialise github repo etc)

-- using @storybook/cli instead of storybook because...I couldn't get it working?

Initially running tests throwing an error:

```
events.js:160
      throw er; // Unhandled 'error' event
```
https://stackoverflow.com/questions/41657754/testing-with-jest-failed-with-error-error-watching-file-for-changes-emfile/41661452

```
brew install watchman
yarn test
```

_Why use create-react-app and getstorybook_

- Super fast to set up
- Very detailed Documentation

_File structure choices_

- All components in `src/`
- Each component has its own folder, with three files, `index.test.js`, `index.js` and `stories.js`
  - This means all tests are next to the relevant components
