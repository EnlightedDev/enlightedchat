import Conversation from "../../models/conversationModel.js"
import Message from "../../models/messageModel.js"


export const sendMessage = async (req, res) => {

    try {

        const {message} = req.body
        const {id: receiverId} = req.params

        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            fromTo: {
                $all: [senderId, receiverId]
            }
        })

        if(!conversation) {

            conversation = await Conversation.create({
                fromTo: [senderId, receiverId]
            })

        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })


        if(newMessage) {

            conversation.messages.push(newMessage._id)

        }

        await Promise.all([
            conversation.save(),
            newMessage.save()
        ])

        res.status(201).json({
            message: `Message Sent Successfully`
        })
        
    } catch (e) {
        
        res.status(500).json({
            error: `Internal server error due to ${e}`
        })

    }

}