import {LoadPizzas, PizzAction, LoadPizzasSuccess} from './pizzas.action';

describe('LoadPizzas', () => {
  it('should create an action', () => {
    const action = LoadPizzas();

    expect({...action}).toEqual({ type: PizzAction.LOAD_PIZZAS });
  });
});

describe('LoadPizzasFail', () => {
  it('should create an action', () => {

  });
});

describe('LoadPizzasSuccess', () => {
  it('should create an action', () => {
    const payload: any[] = [
      {
        id: 1,
        name: 'Pizza #1',
        toppings: [{ id: 1, name: 'onion' }],
      },
      {
        id: 2,
        name: 'Pizza #2',
        toppings: [{ id: 1, name: 'onion' }],
      },
    ];

    const action = LoadPizzasSuccess({payload});

    expect({ ...action }).toEqual({
      type: PizzAction.LOAD_PIZZAS_SUCCESS,
      payload
    });
  });
});
