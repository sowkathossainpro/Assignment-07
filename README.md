# What is JSX, and why is it used?

JSX stands for JavaScript XML. It’s a syntax extension for JavaScript that lets you write HTML-like code directly inside JavaScript, especially in React apps.

## Why JSX is used

=> JSX lets you see structure + logic together, which is much clearer than writing lots of createElement calls.

=> You can use variables, conditions, loops, and functions directly inside JSX using {}.

=> React components return JSX, so your UI becomes a function of data.

=> Fewer bugs, better warnings.

=>Almost all React libraries, tools, and examples use JSX, so learning it is basically mandatory for React development.

## What is the difference between State and Props?

In React, state and props are both used to manage data in components—but they have very different roles.
Props Data:
passed from parent to child
Read-only (the child cannot change it)

State:
Data owned by the component itself
Can change over time
When state changes → component re-renders

## What is the useState hook, and how does it work?
useState is a React Hook that lets a functional component store and update state (data that can change over time).

How useState works (behind the scenes)
=> React remembers the state value between renders
=> Calling setState:
=> Updates the state value
=> Triggers a re-render
=> State updates are asynchronous and batched

## How can you share state between components in React?
In React, you don’t directly share state between sibling components. Instead, you use a few common patterns depending on the app size and complexity.

Here are the main ways to share state between components.
1. Lift State Up (Most Common): Move the state to the closest common parent and pass it down via props.
2. Pass Callbacks as Props: Child updates parent’s state using a function passed via props.

## How is event handling done in React?
Event handling in React is very similar to JavaScript, but with a few important differences in syntax and behavior.
1. In React, events are written in camelCase and you pass a function, not a string.
2. Passing arguments to event handlers with arrow function.
The function runs only when clicked, not on render.