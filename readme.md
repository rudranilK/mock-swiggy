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
- React Props -> render the dummy resturant data on our list page

## Episode 5

- Restructured the app
- Feature | Button : Fetch Top rated Resturants
  - Click handler prop on the button | onClick Event Listener
  - React Hook : "useState"
    - state variable
    - function to set the set variable
    - React Fiber dicussion
    - Virtula DOM discussion

## Episode 6

- Mockdata structure to match API data
- React Hook : "useEffect"
  - The Body component rendering finishes
  - useEffect Hook's callback function is called
    - Calls the actual API, fetches the data
    - Body fucntional component re-renders, with the use of arg[1] of "useState" hook
    - Body is re-rendered with actual API data
  - Bug Fix | ResturantCard Component not rendering
    - patch documentation : Issue 1
- Shimmer UI : Shimmer Functional Component
  - Dummy UI rendering when API data is not yet with us
  - also Known as Conditional Rendering : Render based on condition
- LogIn Button | "useState" hook exercise
  - Inside Header Functional Component -> Button Component
- Search Text & Button
  - Inside Body Functional Component -> Search text & button
    - overwriting the original data
    - Issue 2 in patch.md
