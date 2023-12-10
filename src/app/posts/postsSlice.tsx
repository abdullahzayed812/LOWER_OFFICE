import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';
import {DocumentPickerResponse} from 'react-native-document-picker';

export interface Post {
  title: string;
}

// Define a type for the slice state
interface PostsState {
  isVisibleAddItemModal: boolean;
  postsList: Post[];
  postFiles: DocumentPickerResponse[];
}

// Define the initial state using that type
const initialState: PostsState = {
  isVisibleAddItemModal: false,
  postsList: [{title: 'Qadia name'}, {title: 'Qadia name'}],
  postFiles: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleAddItemModal(state, action) {
      state.isVisibleAddItemModal = action.payload;
    },
    addPost(state, action: PayloadAction<Post>) {
      state.isVisibleAddItemModal = false;
      state.postsList = [...state.postsList, action.payload];
    },
    addPostFile(state, action: PayloadAction<DocumentPickerResponse>) {
      state.postFiles = [...state.postFiles, action.payload];
    },
  },
});

export const {toggleAddItemModal, addPost, addPostFile} = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsVisibleAddItemModal = (state: RootState) =>
  state.posts.isVisibleAddItemModal;

export const selectPostsList = (state: RootState) => state.posts.postsList;
export const selectPostFiles = (state: RootState) => state.posts.postFiles;

export default postsSlice.reducer;
