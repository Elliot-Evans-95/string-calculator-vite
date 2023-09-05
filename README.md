# string-calculator

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `npm run lint` to execute the lint via [ESLint](https://eslint.org/).

## Tags

#Incremental-Kata

## About this Kata

> **_This is based on the [String Calculator](https://codingdojo.org/kata/StringCalculator/) kata_**

This kata is about incremental adding logic to one function.

## Tasks

* Write a program that takes a string input and outputs a string
* Add to the function `StringCalculator`, so it can take a string of number (0, 1 or 2 numbers) separated by comma, and return the sum of all numbers
* Enable the function `StringCalculator` to handle an unknown number of arguments.
* Enable the function `StringCalculator` to handle newlines as separators for example "1\n2,3" should return "6".
* Don’t allow the input to end in a separator so "1,3," is invalid and should return an error message.
* Calling the function `StringCalculator` with negative numbers will return the message "Negative not allowed : " listing all negative numbers that were in the list of numbers.
* Calling the function `StringCalculator` with multiple errors will return all error messages separated by newlines.

## Before you start

This kata has the expectation that you will incrementally work on the tasks (one step at a time).
You have **1 hour** to work on this kata.
