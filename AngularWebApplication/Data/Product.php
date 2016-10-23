<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8"); 

     
    include 'config/database.php';  
  
    $database = new Database();
    $conn = $database->getConnection();
   
    if (!mysql_select_db("ashc94", $conn)) {
            print 'Could not select database';
    
    }
    
    $sql = "SELECT ProductName FROM Products";
     
    $result = mysql_query($sql,$conn);
    
    if(!$result){
        print 'Failed';
    }
    
    
    $arr = array();
    
    
    
    while ($row = mysql_fetch_assoc($result)) {
        array_push($arr,$row['ProductName']);
    }
    
    echo json_encode($arr[0]);
    
    
    


?>


