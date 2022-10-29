var mysql =require('mysql');
var con =mysql.createConnection({
    host: 'localhost',
    user:'root',
    pass:'',
    database:'onlineshopping'
});
con.connect(function(err){
    if(err) throw err
    console.log("connected")
    // var sql ="INSERT INTO `cusromers` (`name`, `lastname`, `email`, `phone`, `address`) VALUES ( 'fayaz', 'nasrati', 'nasrati@gmIL.COM', '98765432', 'kabul')";
    // var sql ="INSERT INTO `cusromers` (`name`, `lastname`, `email`, `phone`, `address`) VALUES ?";
    // var sql = "INSERT INTO `cusromers` (`id`, `name`, `lastname`, `email`, `phone`, `address`) VALUES ?";
//    var sql  ="INSERT INTO `products` ( `name`, `price`, `stock`) VALUES ? "
//     var tools = [
//         ['marker','200','availbale'],
//         ['pen','200','availbale'],
//         ['cute','200','not availbale'],
//         ['macBook','2000','availbale'],
//     ]
    // var values =[
    //      ['asee2', 'nasrati', 'asee@gmail.com', '0987654321', 'kabul'],
    //     ['wadan','nadeem','sarqa@gmail.com','2345678','address'],
    //     ['hasseb','ruhhman','hasib@gmail.com','2345678','address'],
    //     ['hamaz','nawabi','hamaza@gmail.com','2345678','address'],
    //     ['wow','nadeem','sarqa@gmail.com','2345678','address'],
    //     ['wadan','baby','sarqa@gmail.com','2345678','address'],
    //     ['wahuhdhdan','nadeem','sarqa@gmail.com','2345678','address']
    // ]
    // var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20),price VARCHAR(20),stock VARCHAR(20) )"
         var sql ="CREATE TABLE orders (id INT NOT null PRIMARY KEY ,order_num INT , cusromers_id INT ,products_id INT, FOREIGN KEY(cusromers_id) REFERENCES cusromers(id) , FOREIGN KEY (products_id) REFERENCES products(id) )"
    // con.query(sql,[values],[tools],(err,result)=>{
        con.query(sql,(err,result)=>{
        if(err ) throw err;
        console.log("data save it" + result.insertId)
        
    })
})