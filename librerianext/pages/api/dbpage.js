import mysql from 'mysql2';

export default async function handler(req,res){
    const connection=mysql.createConnection({
        host:'localhost',
        port:3306,
        user:'root',
        password:'admin',
        database:'bibliotecacurso'

    });

    Query.connection('SELECT * FROM alumnos', function(err, results, fields){
        if(err){
            console.log(err);
            res.status(500).json({error: err});
        }else{
            console.log(results);
            res.status(200).json(results);
        }
    });

    connection.end();
}

