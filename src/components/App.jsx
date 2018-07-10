import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      masterTicketList: [],
      selectedTicket: null
    };
   
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    5000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  updateTicketElapsedWaitTime() {
    console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList});
  }


  handleChangingSelectedTicket(ticket){
    // this.setState({selectedTicket: ticket}, ()=> {alert(this.state.selectedTicket.names);})
    this.setState({selectedTicket: ticket});
    // this.state = {selectedTicket: ticket};
    // alert(this.state.selectedTicket.names;
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl/>} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket} selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}
export default connect(mapStateToProps)(App);

export default App;