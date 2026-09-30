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
  - `Error` Component to handle any unknown routes - `errorElement` parallel to default route/ AppLayout component

    ```js
    {
        path: "/",
        element: <AppLaylout />,
        errorElement: <Error />,  // Custom Error handling components for random routes
        // Have to be added on the default path and not on other paths
    }
    ```

  - `useRouterError` hook to catch all errors in routes or during rendering

- `rafce` - 'React Arrow Function Component' utility by
  - extension - `ES7+ React/Redux/React-Native snippets` by `dsznajder`

- `Outlet` component & Children Routes
  - Outlet component is the placeholder.
  - Based on what route we are in, from the children route,
    appropiate element will be filled in place of outlet component e.g. About, Contact, Body components

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

- Children Routes / Dynammic routes
  - register a dynammic route e.g. `resturants/:resId` in createrBrowserRouter config
  - This component is created under `AppLayout` component, so `Header` component is sticky for all of the components.
  - Functional component `ResturantMenu` to handle the menu of a resturant
  - `useParams` hook to grab the resturantId variable i.e. the dynammic route id to handle it and pass it to API / Mock data functions
  - From the `Body` component where we return `ResturantCard` component, we return `Link` components so now the resturant cards are clickable
  - to route them to the dynammic route `Link` now has `to={'resturants/${resturant?.id}'}` as the link.
  - So what is happening, we are re-routing the user to hit the dynammic children route
  - And since react-router has the `ResturantMenu` component as the handler, it is re-directed to that component now.
  - `1 Adjustment` in `ResturantCard` component, now that we are returning a Link element e.g.

  ```jsx
  return (
    <Link to={`resturant/${resturant?.id}`} key={resturant?.id ?? 0}>
      <ResturantCard data={resturant} />
    </Link>
  );
  ```

  - the `key` prop now has to be added on the `Link` component as opposed to the `ResturantCard` component that was being returned e.g.

  ```jsx
  return <ResturantCard key={resturant?.id ?? 0} data={resturant} />;
  ```

## Episode 8

- Class Based Component
  - `UserClassComponent` example

  - class `UserClassComponent` extends `React.Component {}`
  - `constructor(props)`
    - props are passed into the constructor
    - where as functional components take the props as parameters
  - `super()` call have to be 1st inside constructor
    - to call the constructor of `React.Component`

  - `this.state` = { count: 0, user: {}}
    - state variables go inside `this.state`

  - `this.setState({})`
    - function to update the state variables.
    - pass the state variables inside the object

  - `render()`
    - method is called to render/return the jsx/html that is rendered by React

  - `componentDidMount()`
    - is called when componet is fully mounted
    - only called on the initial mount
    - make your API calls inside this

  - async `componentDidMount()`
    - await the API calls inside this.
    - useEffect does not allow an async callback

  - `componentDidUpdate()`
    - is called after render(), everytime the component is re-rendered

  - `componentWillUnmount()`
    - is called when page is redirected & component is switched
    - Do your cleanups e.g. clearInterval, cleartimeout here
    - otherwise it could cause performance issues

  - React component lifecycle
    - render-phase
    - commit-phase
    - diagram in notes

  - Order in which class based component methods are called
    - constructor
    - render
    - componentDidMount
    - render ( If re-rendered due to api call )
    - componentDidUpdate
    - componentWillUnmount ( when component is unmounted )

  - Functional Component
    - `useEffect` returns a callback function that is called when component is unmounted
    - similar to componentWillUnmount
    - this is why useEffect doesnt accept an async callback as
      - this changes the callBack function's signature to `: Promise<Function | undefined>`
      - from `: Function | undefined`
    - similarly, do your cleanups in this returned callback function of useEffect()
