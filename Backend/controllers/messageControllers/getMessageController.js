import Conversation from "../../models/conversationModel.js";

export const getMessage = async (req, res) => {

    try {

        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            fromTo: {$all: [senderId, receiverId]}
        }).populate("messages")
        
        if(!conversation) return res.status(200).json([])

        const messages = conversation.messages

        
        res.status(200).json(messages)
        
    } catch (e) {
        res.status(500).json({
            error: `Internal Server Error due to ${e}`
        })
    }

}