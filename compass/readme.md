# Compass

A person is standing in the middle of a field facing either North, South, East or West. They will then make a series of 90 degree turns either left or right. Write a function that will determine which cardinal direction they are now facing. You are given directions which is an array of strings. The first string will be the direction they are initially facing `'N', 'S' 'E' 'W'`. The other strings are all either `'L'` or `'R'` for left or right turns the person will make in series.

Your function must return the direction as a single letter `'N', 'S' 'E' 'W'`

If the array passed in is in the incorrect format, the function should throw an error with the message `invalid directions`

## Examples

```js
['S', 'L' 'L']
```

Initial direction is South
⬇️

Turn Left
➡️

Turn Left
⬆️

Final direction = North

```js
['E', 'L', 'R', 'R']
```
Initial direction is East
⬅️

Turn Left
⬇️

Turn Right
⬅️

Turn Right
⬆️

Final direction = North