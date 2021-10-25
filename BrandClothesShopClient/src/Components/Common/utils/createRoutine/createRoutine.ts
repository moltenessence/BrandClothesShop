
export default <T = any, K = T>(actionName: string) => {

    const SUCCESS = actionName + '/SUCCES';
    const TRIGGER = actionName + '/TRIGGER';
    const ERROR = actionName + '/ERROR';
    const FULFILLED = actionName + '/FULFILLED';

    const success = (payload: K) => ({
        type: SUCCESS,
        payload,
    });

    const fulfilled = (payload: T) => ({
        type: FULFILLED,
        payload,
    });

    const error = (payload: T) => ({
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