// backend/controllers/chatController.js

exports.getMessages = (req, res) => {
    res.status(200).send('Chat messages retrieved successfully.');
};

exports.postMessage = (req, res) => {
    res.status(200).send('Message posted successfully.');
};