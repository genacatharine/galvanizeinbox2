import React from 'react'
import Message from './Message'

const MessageList = ({messages}) => {
  return (
<div>
  { messages.map( message => <Message key = { message.id } subject = {message.subject} />)}
</div>
)
}


export default MessageList
