export const allTodos = (state) => (
  Object.keys(state.todos).map(todoId =>state.todos[todoId])
);
export const allSteps = (state) => (
  Object.keys(state.steps).map(stepListId =>state.steps[stepListId])
);
