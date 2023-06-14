# Screeps Arena Typescript Boilerplate

> inspired by [Screeps Arena Typescript Starter](https://github.com/screepers/screeps-arena-typescript-starter)

---

## Installation

Simply use yarn to fetch the dependencies

```
yarn install
```

---

## Usage

Build as many **arena** as you like in the `src` folder. You just need to stick to the naming convention

```
# Arena name has to start with "arena-"
src/arena-example
src/arena-test_flag
src/arena-competition_capture_the_flag
... 
```

then you can build all of them using

```
yarn build
```

or you can specify a search value for the arena name

```
# This will build "arena-test_flag" and "arena-competition_capture_the_flag"
yarn build flag
```

It will create the corresponding **arena** in the `build` folder.

then you just need to select the built **arena folder** (in the build folder) inside the game

> Note: If you prefer, you can replace `build` by `watch`. It will build as soon as a file modification is detected

Enjoy!