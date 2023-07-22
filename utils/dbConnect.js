import mongoose from "mongoose"

export default function connect (){
    try {
        mongoose.connect("mongodb+srv://ahsandev404:L3ydyz4OQ7l9LeJ1@cluster0.js4n7wk.mongodb.net/?retryWrites=true&w=majority")
        
    } catch (error) {
        console.log(error.message);
    }
}