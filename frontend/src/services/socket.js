import io from "socket.io-client";

const socket = io(process.env.REACT_APP_CHATAPP || 'http://localhost:3333', {});
socket.on('connect', () => { console.log('[IO] Connect => Connection established') });

export default socket;