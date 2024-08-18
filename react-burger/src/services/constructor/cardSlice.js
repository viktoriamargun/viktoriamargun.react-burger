// src/features/cards/cardsSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   { id: 1, text: 'Write a cool JS library' },
//   { id: 2, text: 'Make it generic enough' },
//   { id: 3, text: 'Write README' },
//   { id: 4, text: 'Create some examples' },
//   { id: 5, text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)' },
//   { id: 6, text: '???' },
//   { id: 7, text: 'PROFIT' },
// ];

// const cardsSlice = createSlice({
//   name: 'cards',
//   initialState,
//   reducers: {
//     moveCard: (state, action) => {
//       const { dragIndex, hoverIndex } = action.payload;
//       const [movedCard] = state.splice(dragIndex, 1);
//       state.splice(hoverIndex, 0, movedCard);
//     },
//   },
// });

// export const { moveCard } = cardsSlice.actions;

// export default cardsSlice.reducer;
