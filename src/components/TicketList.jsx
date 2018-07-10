import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  console.log(props.ticketList);
  // var obj=[];
  // for(var x = 0;x < 3;x++)
  // {
  //   var temp= <Ticket names={masterTicketList[x].names}
  //   location={masterTicketList[x].location}
  //   issue={masterTicketList[x].issue}
  //   key={x} />

  //   obj.push(temp);
  // }
  return (
    <div>
    <hr/>
    {props.ticketList.map((ticket) =>
      <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        formattedWaitTime={ticket.formattedWaitTime}
        currentRouterPath={props.currentRouterPath}
        key={ticket.id}
        onTicketSelection={props.onTicketSelection} />
    )}
    {/* <div>{obj}</div> */}
  </div>
  );
};
TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;