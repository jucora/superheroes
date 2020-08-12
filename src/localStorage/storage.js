const storage = (() => {
  const loadState = () => {
    try {
      let serializedState = localStorage.getItem("lastState");

      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  const saveState = (state) => {
    try {
      let serializedState = JSON.stringify(state);
      localStorage.setItem("lastState", serializedState);
    } catch (err) {}
  };

  return {
    loadState,
    saveState,
  };
})();

export default storage;
