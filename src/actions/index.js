export const selectLibrary = (libraryId) => {
    return {
        type: 'SELECT_LIBRARY',
        payload: libraryId
    };
};

// this selectLibrary will be added to state