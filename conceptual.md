### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    - React is a front end javascript framework developed by Facebook. React helps provide a blueprint for application development primarly with the use of components. These components leverage JSX to enable devs to combine logic and HTML to write reuseable and modular code.

- What is Babel?
    - Babel is an open source javascript transpiler that makes modern javascript backwards compatible. 

- What is JSX?
    - JSX essentially an extension to javascript that allows you to mix logic and markup together similar to how other templating languages work, but it has the full power of javascript. 

- How is a Component created in React?
    - There are two ways to create a component in React. They can be created as a function that returns a single JSX element or a fragment, or by extending the React.Component class and calling render().

- What are some difference between state and props?
    - Props are read only, they are passed to a component in the form of an immutaable object by whateveer renders that particular prop. State is internal, meaning it is set and updated within the component itself. 

- What does "downward data flow" refer to in React?
    - This refers to the idea of only passing data flow or state changes further down the virtual DOM tree. This might be reflected in the application as having "smart" parent components that have simplier child components.

- What is a controlled component?
    - A controlled component is a component that contains an HTML form element that typically maintains its own state such as an input or textarea that is allowing react to control its state.

- What is an uncontrolled component?
    - An uncontrolled component is a component that cotains form elements, but the form data is handled by the DOM instead of react. Using refs can come into play here.

- What is the purpose of the `key` prop when rendering a list of components?
    - The key prop helps React identify DOM elements so that when things are changed added or removed it knows which piece of state is being altered.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    - Arrays are mutable, and array indexs are not tied with the value. Array values can change, something could be popped off the end and a new item could be appended in its place. In that case the last item in the array has a different value, but React wouldn't know that the value is now different.

- Describe useEffect.  What use cases is it used for in React components?
    - useEffect is a method used to handle any side effects a component might need. It takes a function and will run after the component renders. This can be used for AJAX requests, timers, logging, mutations and more.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    - useRef is a hook that creates a mutable plain JS object that will persist across renders. Changing the .current property of this ref object doesn't cause a re-render.

- When would you use a ref? When wouldn't you use one?
    - You could use a ref to access a specific DOM element or to cleanup timers. You would not want to use it to manipulate the DOM itself, React should be handling that.

- What is a custom hook in React? When would you want to write one?
    - A custom hook is basically just a function that uses some built in hooks to perform the specific behevior you're looking for. You would use this on common logic that might be duplicated across multiple components. For example you could create a custom hook to fetch from an API.
