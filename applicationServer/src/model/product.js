var mongoose=require('mongoose')
var product = new mongoose.Schema({
    ProductName:{
        type:String
    },
    ProductPrice:{
        type:Number
    },
    AvailableOffers: {
        type:String,
    },
    ProductReliable:{
        type:String
    },
    ProductInfo:[
        {
            ProductColor: {
                type:String,
                //enum:['red','yellow','green']
            },
            ProductQuality:{
                type:String
            },
            ProductFeatures:{
                type:String
            },
            ProductDiscription:{
                type:String
            },
            productStock:{
                type:String
            },
            ProductDimensions:{
                type:String
            },
            ProductWeight:{
                type:String
            },
            HSNCode:{
                type:Number,
               // maxLength:4,
                //minLength:4
            },
        }
    ],
    ProductMenufa:[{
        MenufaDate:{
            type:String,
        },
        MenufaComName:{
            type:String
        },
        MenufaBrand:{
            type:String
        }
    }],
    Origin:[{
        countryOfOrigin:{
            type:String,
        },
        StateOfAssembly:{
            type:String,
        }
    }],
    RatingAndReview:[
        {
            CustomerReviews:{
                type:String
            },
            ratingproduct:{
                type:String
            }
        }
    ]
})
const Product=new mongoose.model('Product',product)
product.index({ProductName:'text',
    'ProductInfo.ProductColor':'text',
    'ProductInfo.ProductWeight':'text'})
module.exports=Product
