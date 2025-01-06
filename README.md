# arjuns-custom-redux

A lightweight implementation of Redux's `createStore` function for state management. This package provides a minimal and straightforward way to manage application state using a reducer function.

## Features

- **`getState()`**: Retrieves the current state of the store.
- **`dispatch(action)`**: Updates the state by dispatching an action to the reducer.
- **`subscribe(listener)`**: Allows registering a listener that will be called whenever the state updates. Returns an unsubscribe function to stop listening.

## Installation

Install the package via npm:

```bash
npm install arjuns-custom-redux
