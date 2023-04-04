import io from 'socket.io-client';

export const socket = io.connect('task7-back-end-production.up.railway.app', {
    autoConnect: true
});