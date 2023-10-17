import { Dispatch, useReducer } from "react";

/*
Магия во плоти

В рамках данного хука мы обеспечиваем работу провайдера, храним прошлое значение стейта заменяя на новое путем диспатча
тип Т - произвольный тип/ любой который использует контекст

prevState в данном случае это наш стейт, 
currentState - значение которое приходит из диспатча 

женерик Partial - делает все поля в типе Т опциональными

(примерно так работает редакс...)
*/

export function useCustomState<T>(initialState: T): [T, Dispatch<Partial<T>>] {
  const [state, dispatch] = useReducer(
    (prevState: T, currentState: Partial<T>) => ({
      ...prevState,
      ...currentState,
    }),
    initialState
  );

  return [state, dispatch];
}
