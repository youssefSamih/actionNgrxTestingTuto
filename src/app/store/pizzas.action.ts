import { createAction, props } from '@ngrx/store';

export enum PizzAction {
  LOAD_PIZZAS = '[Products] Load Pizzas',
  LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail',
  LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success'
}

export const LoadPizzas = createAction(
  PizzAction.LOAD_PIZZAS,
);

export const LoadPizzasFail = createAction(
  PizzAction.LOAD_PIZZAS_FAIL,
  props<{ payload: any }>()
);

export const LoadPizzasSuccess = createAction(
  PizzAction.LOAD_PIZZAS_SUCCESS,
  props<{payload: any[]}>()
)
