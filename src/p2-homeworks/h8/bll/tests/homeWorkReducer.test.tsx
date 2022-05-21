import React from 'react';
import { check18AC, homeWorkReducer, sortDownAC, sortUpAC } from '../homeWorkReducer';

let initialState: any[]; // need to fix any

beforeEach(() => {
  initialState = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
  ];
});

test('sort name up', () => {
  const newState = homeWorkReducer(initialState, sortUpAC());
  expect(newState.length === initialState.length).toBe(true)
  expect(newState[0] === initialState[0]).toBeFalsy()
});
test('sort name down', () => {
  const newState = homeWorkReducer(initialState, sortDownAC());
  expect(newState.length === initialState.length).toBe(true)
  expect(newState[2] === initialState[2]).toBeFalsy()
});
test('check age 18', () => {
  const newState = homeWorkReducer(initialState, check18AC());
  expect(newState.map(el => el.age >= 18)).toBeTruthy()
});
