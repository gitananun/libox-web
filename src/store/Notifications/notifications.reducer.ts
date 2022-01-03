import { NotificationModel } from './../../data/models/NotificationModel';
import { ReduxAction } from 'components/interfaces/Redux';
import { FETCH_NOTIFICATIONS, READ_NOTIFICATION } from './notifications.types';

interface StateInterface {
  notifications: NotificationModel[];
}

const INITIAL_STATE: StateInterface = {
  notifications: [],
};

const reducer = (state = INITIAL_STATE, action: ReduxAction): StateInterface => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    case READ_NOTIFICATION:
      const notificationIndex = state.notifications.findIndex((c) => c.id === action.payload);
      state.notifications[notificationIndex].readAt = new Date(Date.now());
      return {
        ...state,
        notifications: state.notifications,
      };
    default:
      return state;
  }
};

export default reducer;
