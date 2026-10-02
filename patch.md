## Issue 1.

- A function component is "just a function" — but React only calls that function when React itself is asked to render a corresponding element.

Key points, short and practical:

- JSX like <ResturantCard info={x} /> compiles to React.createElement(ResturantCard, { info: x }).

- Calling React.createElement only creates an element descriptor (a plain object). React will call the ResturantCard function later when it reconciles and renders that element into the tree.

- If your map callback doesn't return the JSX, React never receives that element descriptor in the render result, so React never tries to render it and never calls your component function. Example of the bug you had:

- Broken (no return):

```
resturants.map((el) => {
    const { info: resturant } = el;
    <ResturantCard key={resturant?.id ?? 0} data={resturant} />;
  }
)
```

the JSX expression is evaluated but its value is discarded, the callback returns undefined, so React renders an array of undefineds.

- Fixed (returns element):

```
resturants.map((el) => {
    const { info: resturant } = el;
    return
        (<ResturantCard
            key={resturant?.id ?? 0}
            data={resturant}
        />);
  }
)
```

OR

```
resturants.map(el => <ResturantCard key={el.info.id} data={el.info} />)
```

You can call ResturantCard ( propsuired so React receives the element descriptors and then calls your component during rendering. ) directly as a plain function, but that bypasses React (won't mount hooks, won't be tracked by the reconciler) — don’t do that.

- Bottom line: returning the JSX from map is reqJSX like <ResturantCard info={x} /> compiles to React.createElement(ResturantCard, { info: x }).

## Issue 2.

Overwriting the original data in Search Test & Button feature

If resturants is your main state:

```
const [resturants, setResturant] = useState([]);
```

Then:

```
const filteredRes = resturants.filter(...);
setResturant(filteredRes);
```

After the first search, you've permanently replaced the full list with the filtered list.

Example:

    Original: [Pizza, Burger, KFC]
    Search: "P"
    Result: [Pizza]

Now resturants only contains [Pizza].

Next search:

    Search: ""

You can't get Burger and KFC back because they no longer exist in state.

    Problem: once you update the resturants state variable, even after clearing the input box,
    you can't get the old value of all resturants - as the functional component has already being called
    previous value is lost now as there is no global variable concept.

A common solution:

```
const [allRestaurants, setAllRestaurants] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
```

Filter from allRestaurants and display filteredRestaurants.

- Inititally when API call suceeds, update both the state variables
- When you search & filter, just update the filteredResturants variable.
- Have the ListOfresturants as the source of truth
- When displaying the resturant cards, display from filteredResturants
- Initial value is added after api call ( both variables )

## Issue 3.

In `ResturantMenu` Component : ( Child routes )

```
 return (
    <div className="menu">
      <h1> Resturant Name </h1>
      <h2> Menu </h2>
      <ul>
        {menuData.map((el) => {
          const { id, name, price } = el;
          return (
            <div className="menu-item">
              <li> {id}</li>
              <li>{name}</li>
              <li>INR {price}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
```

is returned. This fails to compile. We have seen this pattern in `Body` component.

```
  <div className="res-card-container">
    {filteredResturants.map((el) => {
      const { info: resturant } = el;
      return <ResturantCard key={resturant?.id ?? 0} data={resturant} />;
    })}
  </div>
```

Here we are returning 1 ResturantCard component for each filteredResturant array item.

- Link : https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
  Explains that this is not an issue with returning a Component. This is an issue with returning JSX in react.
- We do not have a Functional Component, but a `ul` that returns a `div` for each item.
- Whenever we iterate through a list, we have to explicitly add a property `key` to it
- Reason is same, React needs to have this key to optimise its rendering
- Official Docs mention this :

  ```
  You need to give each array item a key — a string or a number that uniquely identifies it among other items in that array:

    <li key={person.id}>...</li>

  Note:
    JSX elements directly inside a map() call always need keys!
  ```
