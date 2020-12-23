import React, {useState} from 'react';
import './chatScreen.css';
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] =useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://assets.mubicdn.net/images/cast_member/2797/image-original.png?1579695673',
            message: 'Whats up '
        },
        {
            name: 'Ellen',
            image: 'https://assets.mubicdn.net/images/cast_member/2797/image-original.png?1579695673',
            message: 'Hows it going? '
        },
        {
            message: 'Heyyyyyy'
        },
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <h2>Chat screen</h2>
            <p className="chatScreen__timestamp">YOU MATCHED WUTH ELLEN ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar
                    className="chatScreen__message"
                    alt={message.name}
                    src={message.image}
                    />
                <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                ))}
<div >
    <form className="chatScreen__input">
        <input
        value = {input}
        onChange={(e) => setInput(e.target.value)}
        className="chatScreen__inputField"
        placeholder="Type a message..." 
        type="text"/>
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
    </form>
</div>

        </div>
    )
}

export default ChatScreen
