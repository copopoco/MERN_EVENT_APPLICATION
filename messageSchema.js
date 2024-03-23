import mongoose from "mongoose";

const messageSchema = new mongoose.SchemaType({
    name:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain at least 3 characters!"],
    },

    Email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.is Email, "Please provide valid email!"],
    },
      subject: {
        type: String,
        required: [true, "Subject Required!"],
        minLength: [3, "subject must contain at least 5 characters!"],
    },
    message:{
        type: String,
        required: [true, "Message Required!"],
        minLength: [10, "Message must contain at least 3 characters!"],
    },      
});

export const Message = mongoose.model("Message", messageSchema);