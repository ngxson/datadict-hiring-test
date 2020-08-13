# DataDict Hiring Test

![](https://cdn-gcs.ngxson.com/nuiblog/2020/08/annotation-2020-08-13-190621.780kg5.jpg)

## Available scripts

- `npm start`: start dev. server
- `npm run build`: build project
- `npm run test`: run tests

## Components hierarchy

- App
  - TodoEditor (left)
  - TodoList (right)
    - TodoCard
    - TodoEditor (in case of editing)
    - TodoCard
    - TodoCard
    - ...

Components using `StorageHOC`:
- TodoEditor
- TodoCard
- TodoList