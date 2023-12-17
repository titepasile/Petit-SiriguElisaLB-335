//unfinished
// import React, { createContext, useContext, useState } from 'react';

// const WatchListContext = createContext();

// export const WatchListProvider = ({ children }) => {
//   const [watchlist, setWatchlist] = useState([]);

//   const addToWatchlist = (symbol) => {
//     setWatchlist((prevWatchlist) => [...prevWatchlist, symbol]);
//   };

//   const removeFromWatchlist = (symbol) => {
//     setWatchlist((prevWatchlist) =>
//       prevWatchlist.filter((item) => item !== symbol)
//     );
//   };

//   return (
//     <WatchListContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
//       {children}
//     </WatchListContext.Provider>
//   );
// };

// export const useWatchList = () => {
//   const context = useContext(WatchListContext);
//   if (!context) {
//     throw new Error('useWatchList must be used within a WatchListProvider');
//   }
//   return context;
// };
