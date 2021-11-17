
export default <T = any, S = T, E = T, F = T>
    (actionName: string) => {

    const SUCCESS = actionName + '/SUCCESS';
    const TRIGGER = actionName + '/TRIGGER';
    const ERROR = actionName + '/ERROR';
    const FULFILLED = actionName + '/FULFILLED';

    const success = (payload: S) => ({
        type: SUCCESS,
        payload,
    });

    const fulfilled = (payload: F) => ({
        type: FULFILLED,
        payload,
    });

    const error = (payload: E) => ({
        type: ERROR,
        payload,
    });

    const action = (payload: T) => ({
        type: TRIGGER,
        payload,
    });

    action.SUCCESS = SUCCESS;
    action.TRIGGER = TRIGGER;
    action.ERROR = ERROR;
    action.FULFILLED = FULFILLED;

    action.success = success;
    action.error = error;
    action.fulfilled = fulfilled;

    return action;
}