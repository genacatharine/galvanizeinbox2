import React, { Component } from 'react';
import './App.css';
import Message from './components/Message'
import MessageList from './components/MessageList'
import ToolBar from './components/ToolBar'
import Compose from './components/Compose'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {messages : messages}
    console.log(this.state)
  }

    toggleProperty(message, property) {
      const index = this.state.messages.indexOf(message)
      this.setState({
        messages: [
          ...this.state.messages.slice(0, index),
          { ...message, [property]: !message[property] },
          ...this.state.messages.slice(index + 1),
        ]
      })
    }
    toggleSelect(message) {
   this.toggleProperty(message, 'selected')
 }

 toggleStar(message) {
   this.toggleProperty(message, 'starred')
 }
 markAsRead() {
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected ? { ...message, read: true } : message
      ))
    })
  }

  markAsUnread() {
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected ? { ...message, read: false } : message
      ))
    })
  }

  deleteMessages() {
    const messages = this.state.messages.filter(message => !message.selected)
    this.setState({ messages })
  }

  toggleSelectAll() {
    const selectedMessages = this.state.messages.filter(message => message.selected)
    const selected = selectedMessages.length !== this.state.messages.length
    this.setState({
      messages: this.state.messages.map(message => (
        message.selected !== selected ? { ...message, selected } : message
      ))
    })
  }

  applyLabel(label) {
    const messages = this.state.messages.map(message => (
      message.selected && !message.labels.includes(label) ?
        { ...message, labels: [...message.labels, label].sort() } :
        message
    ))
    this.setState({ messages })
  }

  removeLabel(label) {
    const messages = this.state.messages.map(message => {
      const index = message.labels.indexOf(label)
      if (message.selected && index > -1) {
        return {
          ...message,
          labels: [
            ...message.labels.slice(0, index),
            ...message.labels.slice(index + 1)
          ]
        }
      }
      return message
    })
    this.setState({ messages })
  }


  render() {
      return (
        <div>
          <ToolBar messages= { this.state.messages }
              markAsRead={this.markAsRead.bind(this)}
              markAsUnread={this.markAsUnread.bind(this)}
              deleteMessages={this.deleteMessages.bind(this)}
              toggleSelectAll={this.toggleSelectAll.bind(this)}
              applyLabel={this.applyLabel.bind(this)}
              removeLabel={this.removeLabel.bind(this)}
          />
          <Compose />
          <MessageList messages= { this.state.messages }
            toggleSelect={this.toggleSelect.bind(this)}
            toggleStar={this.toggleStar.bind(this)}
          />
        </div>
    )
  }
}
const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]
export default App;
