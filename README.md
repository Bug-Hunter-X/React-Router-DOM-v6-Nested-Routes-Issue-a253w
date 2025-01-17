# React Router DOM v6 Nested Routes Issue

This repository demonstrates a bug encountered when using nested routes in React Router DOM v6.  The issue occurs when a nested route is defined within a parent route and the parent route also has a default path.  The application fails to render the nested component correctly, instead showing the parent component.

## Bug Description

The bug is related to how React Router v6 handles nested routes and route matching.  In this specific case, the `/contact/:id` route, when accessed, fails to render the `ContactDetails` component; it renders the `Contact` component instead. This is despite the correct path and component being defined.  The issue is not directly related to the rendering logic of the components themselves.

## Solution

The solution involves rearranging the route definitions in the `Routes` component to resolve the priority issue.  By placing the more specific route (`/contact/:id`) before the less specific parent route (`/contact`), React Router accurately matches the URL to the correct component.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/contact/1` (or any other ID) and observe that the `ContactDetails` component does not render.
5. Refer to `bugSolution.js` for the corrected code, showing the solution.
