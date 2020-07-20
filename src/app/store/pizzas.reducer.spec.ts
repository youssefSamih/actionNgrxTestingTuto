import * as fromPizzas from './pizzas.reducer';
import * as fromActions from './pizzas.action';
describe('PizzasReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromPizzas;
      const action = { type: null };
      const state = fromPizzas.PizzaReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_PIZZAS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromPizzas;
      const action = fromActions.LoadPizzas();
      const state = fromPizzas.PizzaReducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe('LOAD_PIZZAS action', () => {
    it('should return the previous state', () => {
      const { initialState } = fromPizzas;
      const previousState = { ...initialState, loading: true };
      const action = fromActions.LoadPizzasFail({ payload: {} });
      const state = fromPizzas.PizzaReducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('LOAD_PIZZAS_SUCCESS action', () => {
    it('should populate entities from the array', () => {
      const pizzas: any[] = [
        { id: 1, name: 'Pizza #1', toppings: [] },
        { id: 2, name: 'Pizza #2', toppings: [] },
      ];
      const entities = {
        1: pizzas[0],
        2: pizzas[1],
      };
      const { initialState } = fromPizzas;
      const action = fromActions.LoadPizzasSuccess({ payload: pizzas });
      const state = fromPizzas.PizzaReducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });
});
