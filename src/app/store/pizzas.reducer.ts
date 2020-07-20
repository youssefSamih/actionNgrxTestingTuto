import { createReducer, Action, on } from '@ngrx/store'
import {LoadPizzas, LoadPizzasSuccess, LoadPizzasFail} from './pizzas.action';

export interface PizzaState {
  entities: { [id: number]: any };
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false,
};

const reducer = createReducer(
  initialState,
  on(
    LoadPizzas,
    (state, action) => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(
    LoadPizzasSuccess,
    (state, action) => {
      const pizzas = action.payload;
      const entities = pizzas.reduce(
        (entities: { [id: number]: any }, pizza: any) => {
          return {
            ...entities,
            [pizza.id]: pizza,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }
  ),
  on(
    LoadPizzasFail,
    (state, action) => {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  )
);

export function PizzaReducer(
  state: PizzaState | undefined,
  action: Action
) : PizzaState {
  return reducer(state, action);
};
