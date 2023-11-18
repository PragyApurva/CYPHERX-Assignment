import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const statusList = ['In progress', 'Backlog', 'Todo', 'Done', 'Cancelled'];
  const userList = ['Anoop Sharma', 'Yogesh', 'Shankar Kumar', 'Ramesh', 'Suresh'];
  const priorityList = [
    { name: 'No priority', priority: 0 },
    { name: 'Low', priority: 1 },
    { name: 'Medium', priority: 2 },
    { name: 'High', priority: 3 },
    { name: 'Urgent', priority: 4 },
  ];

  const [groupValue, setGroupValue] = useState(getStateFromLocalStorage() || 'status');
  const [orderValue, setOrderValue] = useState('title');
  const [ticketDetails, setTicketDetails] = useState([]);

  const orderDataByValue = useCallback((cardsArray) => {
    if (orderValue === 'priority') {
      cardsArray.sort((a, b) => b.priority - a.priority);
    } else if (orderValue === 'title') {
      cardsArray.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    }
    setTicketDetails([...cardsArray]); // Creating a new array to trigger a state update
  }, [orderValue, setTicketDetails]);

  function saveStateToLocalStorage(state) {
    localStorage.setItem('groupValue', JSON.stringify(state));
  }

  function getStateFromLocalStorage() {
    const storedState = localStorage.getItem('groupValue');
    return storedState ? JSON.parse(storedState) : null;
  }

  useEffect(() => {
    saveStateToLocalStorage(groupValue);

    async function fetchData() {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        refactorData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    function refactorData(response) {
      const ticketArray = response.data.tickets.map((ticket) => {
        const userObj = response.data.users.find((user) => user.id === ticket.userId);
        return { ...ticket, userObj };
      });

      setTicketDetails([...ticketArray]);
      orderDataByValue(ticketArray);
    }

    fetchData();
  }, [orderDataByValue, groupValue]);

  function handleGroupValue(value) {
    setGroupValue(value);
    console.log(value);
  }

  function handleOrderValue(value) {
    setOrderValue(value);
    console.log(value);
  }

  return (
    <>
      <Navbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleGroupValue={handleGroupValue}
        handleOrderValue={handleOrderValue}
      />
      <section className="board-details">
        <div className="board-details-list">
          {groupValue === 'status' &&
            statusList.map((listItem) => (
              <List
                key={listItem}
                groupValue={groupValue}
                orderValue={orderValue}
                listTitle={listItem}
                listIcon=""
                statusList={statusList}
                ticketDetails={ticketDetails}
              />
            ))}

          {groupValue === 'user' &&
            userList.map((listItem) => (
              <List
                key={listItem}
                groupValue={groupValue}
                orderValue={orderValue}
                listTitle={listItem}
                listIcon=""
                userList={userList}
                ticketDetails={ticketDetails}
              />
            ))}

          {groupValue === 'priority' &&
            priorityList.map((listItem) => (
              <List
                key={listItem.priority}
                groupValue={groupValue}
                orderValue={orderValue}
                listTitle={listItem.priority}
                listIcon=""
                priorityList={priorityList}
                ticketDetails={ticketDetails}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default App;
