# Design Patterns Vanilla JavaScript Projects

## To setup and run 

Get into the project 

`npx serve`

then redirect to `localhost:3000`

## The problem before applying design patterns?

### 1) Todo Masters App

<details>
    <summary>Read More</summary>
    * The Code works but it has several problems

    In case we want to:
        * Save the list locally 
        * Add keyboard shorcuts 
        * Make it more complex in the future 
        * Create an UNDO action 
</details>  

### Enhancement 

- Create a MIXIN that will implement Observer Pattern. We can directly inject the Observer pattern in the `todo list` to observe each time the list changes. 

But by creating a mixin, it more scalable when mixin allow us to share this functionality across classes / modules