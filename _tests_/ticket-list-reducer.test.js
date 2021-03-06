import ticketListReducer from './../src/reducers/ticket-list-reducer';

describe('ticketListReducer', () => {
    let action;
    const sampleTicketData = {
      names : 'Ryan & Aimen',
      location : '4b',
      issue : 'Jest is being a diva and won\'t work with Webpack!',
      timeOpen : 1500000000000,
      id: 0
    };
  

    test('Should successfully add new ticket data to masterTicketList', () => {
        const { names, location, issue, timeOpen, id } = sampleTicketData;
        action = {
          type: 'ADD_TICKET',
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id
        };
       console.log(id);
        expect(ticketListReducer({}, action)).toEqual({
          [id] : {
            names: names,
            location: location,
            issue: issue,
            timeOpen: timeOpen,
            id: id
          }
        });
      });
    
    });