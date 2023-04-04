import io from 'socket.io-client';

export const socket = io.connect('https://task7-back-end-production.up.railway.app/', {
    autoConnect: true
});