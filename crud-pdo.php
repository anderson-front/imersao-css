<?php 

try {
     $pdo = new PDO("mysql:dbname=crudpdo;host=localhost","root","");

}
catch(PDOException $e){
   echo"Erro com Banco " . $e->getMessage();
}
catch(Exception $e){
    echo"Erro com Generico " . $e->getMessage();
}

var_dump($pdo);

?>
