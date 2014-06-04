var mysql = require('mysql');
var pool = mysql.createPool({
	 host: '10.15.107.75',
	 user: 'root',
	 password: '111111',
	 database:'t_user',
	 port: 3306
});

var selectSQL = 'select * from user limit 10';

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    conn.query(selectSQL,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
    });
});