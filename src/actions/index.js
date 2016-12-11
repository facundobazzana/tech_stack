export const selectLibrary = (libraryId) => {
  return {
    type: 'SELECT',
    payload: libraryId
  };
};
