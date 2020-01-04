import SockJS from 'sockjs-client'
import Stomp from 'react-stomp'

function WebSocket(subsribeUrl, ArrayOfChannels) {
    const socket = SockJS(subsribeUrl); //create wrapper
    const stompClient = Stomp.over(socket);//connect using your client
    stompClient.connect({}, () => {
        ArrayOfChannels.forEach((channel) => {
            stompClient.subscribe(channel.route, channel.callback);
        });
    }, () => {
        setTimeout(() => {
            subscribeToSocket(subsribeUrl, ArrayOfChannels);
        }, 0);
    });
}
function subscribeToSocket() {
    let timeStamp = new Date();return function(subsribeUrl, ArrayOfChannels) {
        const socket = SockJS(subsribeUrl);
        const stompClient = Stomp.over(socket);
        //sending timestamp after connect to get lost packets if any
        stompClient.connect({
            timeStamp
        }, () => {
            ArrayOfChannels.forEach((channels) => {
                stompClient.subscribe(channels.route, channels.callback);
            });
        }, () => {
            setTimeout(() => {
                subscribeToSocket(subsribeUrl, ArrayOfChannels);
            }, 0);
        });
        stompClient.onMessage(function() {
            //update timestamp
            timeStamp = new Date();
        })
    }
};