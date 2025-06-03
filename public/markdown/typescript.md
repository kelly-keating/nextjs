# Typescript

Notes I collected as an intro to TypeScript for a JavaScript user.

## Variables:

```tsx
// FIXME: Comments don't show
const myNum = 12 // type is implicit if supplied with value

const myDir: Direction = 'north' // can also be explicit if needed

let name: string
name = 'Greg'
name = 'George'
```

---

## Functions:

Params should be typed and return value typed. Return type goes after the round brackets of the func :)

```tsx
function sum(a: number, b: number): number {
  return a + b
}

const sum = (a: number, b: number): number => a + b
```

---

## Arrays:

```tsx
const goodDoggos: string[] = ['Pickle', 'Saiga']
const goodDoggos: Array<string> = ['Pickle', 'Saiga']
```

Multidimensional arrays look weird, but should be spoken from right to left. Below is an array of arrays of numbers.

```tsx
const theMatrix: number[][] = [
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1],
]
const theMatrix: Array<Array<number>> = [
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1],
]
```

---

## Tuples

Like arrays above, but specifying length / content.

```tsx
type Frame = [number, number]
```

```tsx
function scoreFrame(frame: [number, number]): number {
  return frame[0] + frame[1]
}
```

---

## Interfaces

Basically an object

```tsx
interface Movie {
  id: number
  title: string
  img: string
  blurb: string
}
```

### Optional fields (?)

```tsx
interface User {
  id: number
  username: string
  nickname?: string
  favouriteEmoji?: string
}
```

### Extending interfaces

```tsx
interface Animal {
  living: true;
	species: string;
}

interface Dog extends Animal {
  legs: 4;
  faveToy: string;

```

---

## Types

Creates a single name for another (usually more complex) type, OR, create a type with limited options

```tsx
type Direction = 'north' | 'south' | 'east' | 'west'
```

```tsx
type Frame = [number, number] | [number, number, number]
type Game = Array<Frame>
```

Types use _intersections_ to extend them

```tsx
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}
```

---

## to be written

generics

what were these?

---

utility types

```tsx
Partial<Movie>
Omit<Movie, ‘id’>
```

---

union is a thing

```tsx
export type Person = User | Admin
```

---

Enum is a restricted list of options - do they matter?? could you just type it like direction above?

(diff is that index association, but not much benefit)

---

narrowing - is there more narrowing?

```tsx
if ('role' in person) {
  additionalInformation = person.role
}
```

```tsx
export function isAdmin(person: Person): person is Admin {
  return person.type === 'admin'
}

export function isUser(person: Person): person is User {
  return person.type === 'user'
}
```

---

module export declaration files

```tsx
//node_modules/str-utils/index.js
//declarations/str-utils/index.d.ts

declare module 'str-utils' {
  export function strReverse(value: string): string
  export function strToLower(value: string): string
  export function strToUpper(value: string): string
  export function strRandomize(value: string): string
  export function strInvertCase(value: string): string
}

// OR

declare module 'str-utils' {
  type StrFunc = (value: string) => string

  export const strReverse: StrFunc
  export const strToLower: StrFunc
  export const strToUpper: StrFunc
  export const strRandomize: StrFunc
  export const strInvertCase: StrFunc
}
```

props

```tsx
interface Props {
  book: Book,
}

function BookTile(props: Props) {
  const { book } = props

	...
}

// OR

interface Props {
  book: Book,
}

function BookTile({ book }: Props) {
	...
}
```

passing set state hook as prop

```tsx
interface Props {
  book: Book
  setEdit: React.Dispatch<React.SetStateAction<number>>
}
```

react events ⇒ https://devtrium.com/posts/react-typescript-events
