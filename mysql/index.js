let  Mysql =require('mysql')

function fn(){
    let connection=Mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'userdata'
    })
    return connection
}

let selectSql=(sql,array)=>{
    let connection=fn();
    return new Promise((resolve,reject)=>{
        connection.query(sql,array,(err,info)=>{
            if(!err){
                resolve(info)
            }
            connection.end()
        })
    })
}
let insertSql=(sql,array)=>{
    let connection=fn();
    return new Promise((resolve,reject)=>{
        connection.query(sql,array,(err)=>{
            if(!err){
                resolve('ok')
            }
            connection.end()
        })
    })
}

// let deleteSql=(sql,array)=>{
//     let connection=fn();
//     return new Promise((resolve,reject)=>{
//         connection.query(sql,array,(err)=>{
//             if(!err){
//                 resolve('ok')
//             }
//             connection.end()
//         })
//     })
// }
// let updateSql=(sql,array)=>{
//     let connection=fn();
//     return new Promise((resolve,reject)=>{
//         connection.query(sql,array,(err)=>{
//             if(!err){
//                 resolve('ok')
//             }
//             connection.end()
//         })
//     })
// }
module.exports={
    selectSql,
    insertSql,
    deleteSql:insertSql,
    updateSql:insertSql
}

