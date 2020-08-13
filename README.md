# Datadict Hiring Test

Live demo: https://unruffled-kalam-6d25df.netlify.app/

![](https://cdn-gcs.ngxson.com/nuiblog/2020/08/annotation-2020-08-13-190621.780kg5.jpg)

Author: [@ngxson](https://github.com/ngxson)  
Website: [ngxson.com](https://ngxson.com)

## Available scripts

- `npm start`: start development server
- `npm run build`: build project
- `npm run test`: run tests (using jest + puppeteer)
- `npm run lint`: run eslint

## Components hierarchy

- App
  - TodoEditor (left)
  - TodoList (right)
    - TodoCard
    - TodoEditor (in case of editing)
    - TodoCard
    - TodoCard
    - ...

## StorageHOC

`StorageHOC` is a custom state manager. It provides 2 props for its child component:
- `todoList`: array of all notes
- `doAction(tag, data)`: for manipulating todo list

Note: app data is saved to `localStorage`

Components using `StorageHOC`:
- TodoEditor
- TodoCard
- TodoList