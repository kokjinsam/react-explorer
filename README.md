# React Explorer

I'm in process of learning how to properly use React and other stuffs in Meteor 1.3. I have a set of libraries and technologies with some goals that I want to learn and explore.

## Technologies / Libraries

- [X] react
- [X] react-dom
- [X] react-komposer
- [X] react-simple-di
- [X] react-mounter
- [ ] react-intl
- [ ] react-toolbox
- [ ] react-addons-css-transition-group

## Some of my Goals

- [ ] learn about Mantra and how to incorporate the abovementioned technologies into Mantra
- [ ] learn about Redux
- [ ] learn about GraphQL / Lokka
- [ ] re-factor react-toolbox components into stateless components
- [ ] learn to write tests

## Problems

- [ ] How do I manage local state and component state? (Mantra)
- [ ] How do I allow user to manually change locale? (react-intl)
- [ ] How to do SSR? [see this](https://github.com/mantrajs/mantra-sample-blog-app/issues/12)

### LocalState
- USER.LOGGED_IN (boolean) True if user is logged in. Same as currentUser
- USER.LOGGING_IN (boolean) True if user is logging in. Same as loggingIn
- USER.LOGGED_IN_ERROR (string) Null if there's no error
- USER.SIGN_UP_ERROR (string) Null if there's no error
