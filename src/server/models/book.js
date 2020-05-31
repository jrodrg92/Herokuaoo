import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/*const Book = new Schema({
    title: String,
    author: String,
    image: {
        type: String,
        default: false
    }
})*/
const Book = new Schema({
    title: String,
    author: String,
    image: String
});

export default mongoose.model('books',Book);