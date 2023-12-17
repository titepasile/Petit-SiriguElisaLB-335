import React, { createContext, useContext, useState } from 'react';

const WatchlistContext = createContext();

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (symbol) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, symbol]);
  };

  const removeFromWatchlist = (symbol) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((item) => item !== symbol));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
