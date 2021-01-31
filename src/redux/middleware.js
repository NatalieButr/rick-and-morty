export function asyncAction() {
  return (next) => (action) => {
    console.log(next, action);
    const { callAPI, types, ...rest } = action;
    if (!callAPI) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });
    return callAPI.then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: FAILURE }),
    );
  };
}
