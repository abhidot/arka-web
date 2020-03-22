var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    express    = require("express"),
    app        =express();


//APP CONFIG
mongoose.connect("mongodb://localhost/arka-web-app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

//MONGOOSE MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type:Date, default: Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);

var recommendationSchema = new mongoose.Schema({
    url : String
})
var Recommendation = mongoose.model("Recommendation",recommendationSchema);
// Blog.create({
//     title: "astronomy blog",
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIAVgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADsQAAIBAwMCBAMFBgQHAAAAAAECEQADBBIhMQVBEyJRcWGBkQYyobHwFCMzQsHRFWLh8SREUnKCkrL/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEBAAEFAQEAAAAAAAAAAAABEQIDEjFBUSEE/9oADAMBAAIRAxEAPwDxQw8E8xHG3wojONUIoKg7Fl3pwRqLNBYySeR9KdtOiFgSdxE9qogvukEQWBncSPpRR/D8QqO4A/XvTkgAhQB8RU08yaJUQI4M+tMjXHNy2LUs+j7p1EiDHr8u1CQruWE7Ua0AOBDxtKzJkcztUVEQ5UgNup4HvxQaIti4uvhe8CalbXUCYEgGZE9v7/nU1lVgeIAQRE7R3EVHSy6k0mI3B+FAAjnjfse1NpgGPrE0Yw27CRxPPw7UmVyQzqQD/NSCuwbYCDA7UqI678R8qVBpFFDsEcMBMNESKnEfdgn15n609kIdQYSSPKeADUrTeENSki4DIPpTTplTSVP3QSd/SipbAdSWn4jmYn86iiwY0cCQPhzUwi6m3GocSZmmVqPhELBPxmrTYzIocyFJhT3cjn8x9aa2nmhD35BAj5/KrNl7kIpYAAgrqaQN+fwpyJ1RVPLpmN+Nvx+YFBuO2kBARJ9ZEzVvwtN5iIYEkwZP1oLoEuMAPMpgEbiTtzSVKrsCB5gN9vanVAd1VgF2O/qYqcNpJKkj1jiokkMZIkjae36/pSNEnzcBjHfimqSkj+UUqDE8MluGldieeP8Aap22IAEqJYQSIK/EU5QCGDTJIIHp6/j+FSW2Ad/u9tO1ViNIBlVp07AEgDeP0atYGOmVfXFa+Mdj5LbaGYOzMFCtvsPMd/h8aGqkqf5jG4Pt+PFbGB0y7dyMa8Mi3albl9XeToFkamnaNtJPyp4nROofZvJ6b0u9nXr1pxaNtSgQhvOWjngwoMejfCrGf9mcvpt+3jZWTjP4uXbxlNtyxBuTBiOO/wCHtq5nQvtE+OMC9k491bum0bIXfSGlW2XgbmeYX4RQ7OH1XqHTrfV7mXYFm1cbKDld9dtmJOw3IJJjj4GiC1Vy/sjkJkXhcybClfDhtBKMHNxRwJn92e28j0rkCF8UnhiJmf1+jXo69I67c8Ozi59k2o8L+Hx4TkAgld4KH/Wa4TNwjg5LY9wqblqNUTEwDG/pxO/vSpyqbKAJO3M78exoLAr5exjcnmN/7fSrLEOoB3IPr2oZB1QVEj0pYqUBlLA9xPC9qep6ZaH8x5pUGII1DbgzERNWLCC86K7KqxBY9tuYG/ahqB2KzEGrGg6TI32MfD19uK0kZWi9Owb2fkfs+Muu4wbSCTLBQWIEd4U10WJ0/qGFdW7av4q3On49+8ihWaBoQuDtBBF4d+5rH6Pl3+ldSsZ2K4W/YbUjRIEiNx7E1tdJtdQ6omT4F3G1FFxHW6CJF0Lb22O5FlPp708LWpiN9pmGL1BcnHY21t3bRJCmb2tFBMfFhB2E1TwLfUv8NudNx8q2uKVu22tlC50hgrkEDv4h32P0qdvK6ojDCGRjFVx7TxpaAiFWVZjnYH0+NFuYeZ01jhO2O7ML1wXSreUDdu3rbnvuBTnFFv6tWh12y5W1l4rvYyQGuKhkO197cmV388yOw+lYfW+hdSvZtn9tysVsh7em2NRUlUWZJiPu7+p39q28deuXMu6VyMXUwS6wdSZi42mYG0uWNc7n9Szsi4P2jIS54KuiMFgQyspPE8MY+VKzVca5pkA42PPFNEyCxmeeZ+VWfDgAgn1G1RZG2O25nmli5VRgNtcx23imqVxf5Qe80qlSyEDESIE+8D0qapvBJ+O1FUeWiKnljt8BW+Oe1G2xjzbttvtW79m7nUVu316c1oHSmQxucfuWDD8SNu9YwRVTXI088x9a6hOj9a6JdyXuLZtkY95LhdtXlVQzRHfSAR6waLmCaHiYmfmdRcLeseOrnGMqwH3W48sxCtuat3Hzcrqlu7dOMuRj37dtWAcKXdpX5SDvAHvtQcNOqYnWlt2RZvZd67cu+GoJDMguKQJj/OAO+1WbON1G31fIVGxxlLaW48klVCshnfk7A+nMbwKIm+B7Z6uuEL3iYospaDqQpnTcBefl4Z2In8xxN4sS8Aw51bCu+S31lHXGteBcFlrVoAEyGR2RPTupHz35iuSzumnFa4lx0R7V7wWtfzSOSO0TtzSkVGS6bgDmNqFcT93pM/EGtK6BoIUHb196pOqkSe/1osXKpuoZt22gd6VEcFd9vpSrPGmriqOWGrbmaIUJP3gfU0dLcFeRUgkDia6Mcuqptgys7Hbauowup9W6qLlm3Zx7ijWzqw8pFyUO08Rcj/1rOxc/KxbXh2HVVmRNtG/ME1YsdRyrWQ18urOyqplQoIV1fhQBygpXjfhyxcycbqYvC5kJYtG4b11fMxnWnnI5gRx8WHytXl6rZ6tN+3ZTMyQcXSrTuSvxMcrVC513JvraF23bc2rbW7bDUDpZSp7+h/CjP1bIy86xmXVQXbVwXEKjbUumP/haU48vYtjXyr3VLFrIyLtqyqKEuXYYkNLuynY/9U1znVMDNvtfzHt2lUNN0hwADo8Q8nbb8dq1LvVsq7h3MQeHD2ktnmYUyO/rQ8jruVZ0KLdgssSCp8x0ad9/jP8AptR28p6OWa53qODcwcw2boDMAD5D2IB+tZ9waiQ0egrU6nl3M/J/aLwAYqqkrwQBHf2qiRusn9RSvhp+KjJB2AHzpVY0qT3G1Kow9aCIwJ7SIMelEt2wZnaKs49yxkIDZuK0DcRBo/gwQfjXXLK5rxsUvD7+nM04tT/erRs8QCKc2uw+dPCkqobPpM0RAV/E/OrIt7gEcU6oqge/PwoFiVhVD69oHIJ5qrkjXJUGO5I3q4iKwhth70e4iPYXyFVJE1JzYwDjnVqB+lQa1AkgiK0LlqHgHaYkmq59DuPj+dT2r1ntaWdhtSo14paPm2+VKp7VbXOXwLj6JIWY8vPt7TV7Ayc3BuJpuAgjz919yPpWBfRsa8EvXCxEEiJG9RbJZb/iJcfYQJNcc5fHZn16Hf63iWAvjW7oYg/cUEfWsfK+0dy45awrWVVTpWAdR+Nc+/V/EZheVWTRCwBt6n6/rtU7Vy3cQktpuNHlnj4+1azq3l+WovCTw6TC+0dx7AS5jqb5YwxuaV0x7Hei43XrxvhL2NaYBT/DuEknt2rCx7/7PadheW6FU7p+cd6NiZ3hKSjISw39Qf60d/L6fZx+OnudTxNRA8QaSZ8nH6g0H/F8a42hGeQeCvFchf6kodrYYaog01nrFkH7l1yB/wCIHtTvWqZ0uLuLzqF1XStuY529qBeWFFxVJUz5o2rEPU7RRksW7twoCGVgJPsJ4mOaWP1I2bPg2Js8sbap5G9x2PtzSv8ATVT+fiD9oGcWUW2zai0+XmN6Vc/1rMu3cwlmkDYe3zpVnept0dkhuon/AIhf+xfyqi3NKlWc8LvkbIACWYEbdqs/8ta+F1wPaKelR7Ja6P8AfJ76f6CmTa7kAbQ1KlWsJlXgBZQgbmZPzNKxuyA8Ft/xpUqyptoknMusSdXhTPf70fltUCf3Vo/5v6GlSqWkYuUSbzSe9NSpU2b/2Q==",
//     body:"this is my first blog ever!!"
// },function(err,blog){
//     if(err)
//     console.log(err);
//     else
//     console.log(blog);
// });


//RESTFUL ROUTES
app.get("/",function(req,res){
    res.render("index");
})

app.get("/blogs",function(req,res){
    Blog.find({},function(err,allBlogs){
        if(err)
        console.log(err);
        else
        res.render("blogs/blog",{blogs:allBlogs});
    });
})

app.get("/blogs/new",function(req,res){
    res.render("blogs/new-blog");
})

app.post("/blogs",function(req,res){
    Blog.create(req.body.blog,function(err,newBlog){
        if(err)
        console.log(err);
        else
        res.redirect("/blogs");
    })
})
//SHOW ROUTE FOR BLOGS
app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id, function(err,foundBlog){
        if(err)
        console.log(err);
        else
        res.render("blogs/show-blog",{blog:foundBlog});
    })
})

app.get("/explore",function(req,res){
    Recommendation.find({},function(err,allBlogs){
        if(err)
        console.log(err);
        else
        res.render("explore",{recommendation:allBlogs});
    });
})
app.post("/explore",function(req,res){
    Recommendation.create(req.body.recommendation,function(err,newRecommendation){
        if(err){
         console.log(err);
         res.redirect("/explore")
        }else
         res.redirect("/explore");
    })
})
app.listen("3000",function(){
    console.log("ARKA app has started!!")
});