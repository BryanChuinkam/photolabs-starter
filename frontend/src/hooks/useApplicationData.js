
import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};


const reducer = (state, action) => {
  switch (action.type) {
  case 'FAV_PHOTO_ADDED':
  {
    const clonelikedIds = state.likedIds.slice();
    clonelikedIds.push(action.payload.id);
    return {
      ...state, likedIds: clonelikedIds
    };
  }
  case 'FAV_PHOTO_REMOVED':
  {
    const clonelikedIds = [...state.likedIds];
    const index = clonelikedIds.findIndex((favId) => {
      favId === action.payload.id;
    });
    clonelikedIds.splice(index, 1);
    return {
      ...state, likedIds: clonelikedIds
    };
  }
  case 'OPEN_MODAL':
    return { ...state, isModalOpen: true, modalData: action.payload.data };

  case 'CLOSE_MODAL':
    return { ...state, isModalOpen: false, modalData: null };

  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );

  }


};


export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    likedIds: [],
    isModalOpen: false,
    modalData: null
  });



  const likeSetter = (id) => {
    if (!state.likedIds.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    }

  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });

  };

  const openModal = (data) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: { data } });

  };



  return { state, likeSetter, openModal, closeModal };
}