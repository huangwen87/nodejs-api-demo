var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '10.15.107.75',
    user: 'root',
    password: '111111',
    database:'t_user',
    port: 3306
});
conn.connect();


var insertSQL = 'insert into user(name) values("conan"),("fens.me")';
var selectSQL = 'select * from user limit 10';
var deleteSQL = 'delete from user';
var updateSQL = 'update user set name="conan update"  where name="conan"';

//delete
conn.query(deleteSQL, function (err0, res0) {
    if (err0) console.log(err0);
    console.log("DELETE Return ==> ");
    console.log(res0);

    //insert
    conn.query(insertSQL, function (err1, res1) {
        if (err1) console.log("err1: "+err1);
        console.log("INSERT Return ==> ");
        console.log(res1);

        //query
        conn.query(selectSQL, function (err2, rows) {
            if (err2) console.log("err2: "+ err2);

            console.log("SELECT ==> ");
            for (var i in rows) {
                console.log(rows[i]);
            }

            //update
            conn.query(updateSQL, function (err3, res3) {
                if (err3) console.log("err3: "+ err3);
                console.log("UPDATE Return ==> ");
                console.log(res3);

                //query
                conn.query(selectSQL, function (err4, rows2) {
                    if (err4) console.log("err4: " + err4);

                    console.log("SELECT ==> ");
                    for (var i in rows2) {
                        console.log(rows2[i]);
                    }
                });
            });
        });
    });
});
//conn.end();