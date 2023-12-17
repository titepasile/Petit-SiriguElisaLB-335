import React, { createContext, useState, useContext } from 'react';

const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (symbol) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, symbol]);
  };

  return (
    <WatchListContext.Provider value={{ watchlist, addToWatchlist }}>
      {children}
    </WatchListContext.Provider>
  );
};

export const useWatchList = () => {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error('useWatchList must be used within a WatchListProvider');
  }
  return context;
};
