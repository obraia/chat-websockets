import React, { useState, useEffect, useRef, useMemo } from 'react';
import { lighten, desaturate, getContrast } from "polished";

import socket from "../../services/socket";

import { Container, MessageContainer, Message, MessageUser, MessageText, MessageDate, 
    InputGroup, InputText, LabelInput, InputMessage, SendButtonInput } from './styles';

function Chat() {
    const [messages, setMessages] = useState([]);
    const [recivedMessage, setRecivedMessage] = useState(null);
    const [messageID, setMessageID] = useState(0);
    const [messageColor, setMessageColor] = useState('');
    const [textColor, setTextColor] = useState('');

    const messageText = useRef();
    const username = useRef();

    useMemo(() => {
        socket.on('recivedMessage', message => {
            message.from = 'others';
            setRecivedMessage(message);
            console.log(message);
        })
    }, []);

    useEffect(() => {
        if (recivedMessage) setMessages([...messages, recivedMessage]);
    }, [recivedMessage]);

    useEffect(() => {
        getRandomColor();
    }, []);

    function getRandomColor() {
        let backgroundColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
        backgroundColor = desaturate(0.2, (lighten(0.2, backgroundColor)));

        let textColor = getConstrastColor(backgroundColor);

        setMessageColor(backgroundColor);
        setTextColor(textColor);
    }

    function getConstrastColor(color) {
        if (getContrast(color, '#fff') < 5.0) return '#3d3d3d';
        else return '#dedede';
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setMessageID(messageID - 1);

        const date = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:).*/, "$1").slice(0, -1);

        const newMessage = {
            from: 'my',
            id: messageID,
            username: username.current.value,
            text: messageText.current.value,
            backgroundColor: messageColor,
            textColor: textColor,
            date,
        }

        setMessages([...messages, newMessage]);

        socket.emit('sendMessage', newMessage);

        messageText.current.value = '';
    }

    return (
        <Container autoComplete="off" onSubmit={handleSubmit}>

            <InputGroup>
                <LabelInput htmlFor="username">Username</LabelInput>

                <InputText
                    id="username"
                    ref={username}
                    required />
            </InputGroup>

            <MessageContainer id="messageContainer">

                {messages.map(m => (
                    <Message className={m.from} key={m.id}
                        style={{ background: m.backgroundColor }}>
                        <MessageText style={{ color: m.textColor }}>
                            <MessageUser>{m.username}:</MessageUser>
                            {m.text}
                        </MessageText>
                        <MessageDate>{m.date}</MessageDate>
                    </Message>
                ))}

            </MessageContainer>

            <InputGroup>
                <InputMessage
                    id="message"
                    placeholder="Enviar mensagem..."
                    ref={messageText}
                    required />

                <SendButtonInput>Enviar</SendButtonInput>
            </InputGroup>

        </Container>
    );
}

export default Chat;