1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   Ans: **getElementById** used for find one element with the given id. It returns a single element.
   **getElementsByClassName** used for find out all the elements with the given class. it returns a HTMLCollection.
   **querySelector** used for finds the first element which matches with a css selector like id or class. It returns the first element of the matched selectors.
   **querySelectorAll** used for find out all the elements which matched with the css selector. It returns a nodelist of all the matched elements.
   
2. How do you **create and insert a new element into the DOM**?

   Ans: **create element**: let p = document.createElement('p')
   **insert element**: document.body.appendChild('p')
   
3. What is **Event Bubbling** and how does it work?

   Ans: When an event occurs it starts from the target element then bubbles up through its parents. like there is a button inside a div. When a button clicks
   event first fires on the button, then on the div, then on the body, then on the document.
   
4. What is **Event Delegation** in JavaScript? Why is it useful?

   Ans: Not to adding eventListeners to all the child, just add to its parent element and let the parent handle it is called event delegation.
   It is useful because less eventListeners will give better performence.
   
5. What is the difference between **preventDefault() and stopPropagation()** methods?

   Ans: **preventDefault()** : it stops default browser action.
   **stopPropagation()** : It stops the event from bubbling up to parent elements.
