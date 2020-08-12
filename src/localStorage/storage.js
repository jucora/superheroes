const storage = (() => {
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem('lastState');

      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  const saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('lastState', serializedState);
    } catch (err) {
      return undefined;
    }
    return null;
  };

  return {
    loadState,
    saveState,
  };
})();

export default storage;
