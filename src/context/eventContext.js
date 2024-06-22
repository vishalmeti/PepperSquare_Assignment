import React, { createContext, useEffect, useState } from "react";

const EventContext = createContext();

const EventContextProvider = ({ children }) => {
  const [count, setCount] = useState(11);
  const [active, setActive] = useState(1);
  const [events, setEvents] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [loading, setloading] = useState(true);
  const [loadMore, setloadMore] = useState(5);

  useEffect(() => {
    //call api
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        "https://refreshing-darling-a2eda30556.strapiapp.com/api/school-events"
      );
      const data = await response.json();
      setEvents(data.data);
      setfiltered(data.data.slice(0, loadMore));
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setloading(false);
    }
  };

  return (
    <EventContext.Provider
      value={{
        count,
        setCount,
        active,
        setActive,
        events,
        setEvents,
        filtered,
        setfiltered,
        loadMore,
        setloadMore,
        loading,
        setloading,
        fetchEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventContextProvider, EventContext };
