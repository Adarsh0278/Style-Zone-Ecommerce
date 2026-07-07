import mogoose from 'mongoose';

const productSchema = mogoose.Schema({
    name:{type:String, required:true},
    discount:{type:Number, required:true},
    price:{type:Number, required:true},
    image:{type:Array, required:true},
    category:{type:String, required:true},
    subCategory:{type:String, required:true},
    bestSeller:{type:Boolean, required:true},
    date:{type:Date, default:Date.now}

})

const Product = mogoose.model('Product') || mogoose.model('Product', productSchema);
export default Product;