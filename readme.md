###

Build & run the project for Dev

```
npx parcel src/index.html
```

###

Build the project for PROD ( minified)

```
npx parcel build src/index.html
```

## Episode 4

- Init Swiggy Projet
- Design AppLayout, Header, Body Components
- Css Styling for the Resturant Card, Logo, Swiggy logo, Nav bar in Header component
- Dummy data for Resturants
- `React Props` -> render the dummy resturant data on our list page

## Episode 5

- Restructured the app
- Feature | Button : Fetch Top rated Resturants
  - Click handler prop on the button | `onClick` Event Listener
  - React Hook : `useState`
    - `state` variable
    - function to set the set variable
    - `React Fiber` dicussion
    - `Virtula DOM` discussion

## Episode 6

- Mockdata structure to match API data

- React Hook : `useEffect`
  - The Body component rendering finishes
  - `useEffect` Hook's callback function is called
    - Calls the actual API, fetches the data ( Data Population )
    - Body fucntional component re-renders, with the use of arg[1] of `useState` hook
    - Body is re-rendered with actual API data
  - Bug Fix | ResturantCard Component not rendering
    - patch documentation : `Issue 1`

- `Shimmer UI` : Shimmer Functional Component
  - Dummy UI rendering when API data is not yet with us
  - also Known as Conditional Rendering : Render based on condition

- LogIn Button | `useState` hook exercise
  - Inside Header Functional Component -> Button Component

- Search Text & Button
  - Inside Body Functional Component -> Search text & button
    - overwriting the original data
    - Issue 2 in `patch.md`

## Episode 7

- Dependency Array Discussion of useEffect hook

- `react-router@7` installation
  - createBrowserRouter function, RouterProvider Component for router configs
  - About, Contact, Functional components
  - Error Component to handle any unknown routes - errorElement in default route/ AppLayout component
  - `useRouterError` hook to catch all errors in routes or during rendering

- `rafce` - 'React Arrow Function Component' utility by
  - extension - `ES7+ React/Redux/React-Native snippets` by `dsznajder`

- `Outlet` component & Children Routes
  - Outlet component is the placeholder.
  - Based on what route weare in, from the children route,
    appropiate element will be filled in place of outlet component

- link the list items in `Header` component
  - use `Link` component from react-router to move between pages
  - using `<a href='pageLink'> </a>` reloads the whole page
  - using `<Link to='pageLink'> </a>` only reloads the particular body component. header remains intact as is, no reload
    - For Link component. You have to use the route name e.g. `'/'` | `'/about'` | `'/contact'` and not the file name/loc.

- Routing
  - Client Side Routing
    - Client already has the components, when re-routed, client just loads/refreshes the differnt component
  - Server Side Routing
    - using anchor tag, trigger network call to fetch html page & re-render
