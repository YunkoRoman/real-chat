

export const sendPrivateMessage = (socket, userRecipientId, userRecipientName, msg, senderId, senderName) => {
    socket.emit('msg', {userRecipientId, userRecipientName, msg, senderId, senderName, date: new Date()}, data => {
        // console.log(data);
        return data
    });

    socket.on('privateMsg', data => {
        console.log(data);
    })
};






