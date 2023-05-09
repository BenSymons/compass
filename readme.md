# Compass

For this kata, you need to write a function that will be given a single array as an argument. In the array, the first item refers to the cardinal direction you are facing `"N"`, `"E"`, `"S"` or `"W"`. The other items in the array indicate 90 degree turns either left `"L"` or right `"R"`. Your function should return the direction you will be facing after making each of these turns in order as a single letter.

If you are given an array with just a direction and no turns, you should just return that same direction.

Some types have been given for you but they can be changed/ added to

To run the tests for the kata run:
```shell
npm test
```
This will compile the typescript and then run the tests

## Arguments

`directions`: an array of strings where the first string is the direction you are initially facing, and the other strings are a series or right or left turns.

## Examples

```js
compass(["N", "L", "L", "L"])
```
starts facing north ^,

turn Left, now I face West <

turn Left again, now I face South V

turn Left again, now I face East >

so your function should return `"E"`

```js
compass(["S", "L", "R", "R"])
```
V South
> West
V South
< East

returns `"E"`


