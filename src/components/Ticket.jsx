import React from 'react';
import PropTypes from 'prop-types';
import image from '../assets/images/download.jpeg';
import Moment from 'moment';

function Ticket(props){
  const ticketInformation =
  <div className = "background" > 
  <h3 >{props.location} - {props.names}</h3>
  {/* <h4>{displayTimeOpen(props.timeOpen)} ago</h4> */}
  <h4>{props.formattedWaitTime}</h4>
 
{/* <p><em>{props.issue}</em></p> */}
<hr/>
</div>;
  
   
    //      <style jsx global>{`
    //       // div {
    //       //   background-color: red;
    //       // }
    //       .background {
    //         width:300px;
    //         height:300px;
    //         // background-color: blue;
    //         // background-image: url(${image});
    //       }
    //     `}</style>
    //     <div>
    //     <div className = "background" > 
    //     <h3 >{props.location} - {props.names}</h3>
    //     <h4>{displayTimeOpen(props.timeOpen)} ago</h4>
    //     <h4>{props.formattedWaitTime}</h4>
    //     </div>
    //   <p><em>{props.issue}</em></p>
    //   <hr/>
    // </div>
  
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onTicketSelection({names: props.names, location: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime});}}>
      {/* <div onClick={() => {alert('hey, you just clicked the ticket belonging to ' + props.names);}}> */}
       {/* <div onClick={function(){console.log('hey, you just clicked the ticket belonging to ' + props.names);}}> */}
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}
function displayTimeOpen(timeOpen) {
  return timeOpen.from(new Moment(), true);
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};
export default Ticket;
