<?php




class Database{

  function getConnection(){
  
      try{
          $conn = mysql_connect("cust-mysql-123-19", "ashc94", "liverpool94");
          

          // Check connection
          if ($conn->connect_error) {
              die("Connection failed: " . $conn->connect_error);
          } 
          
          return $conn;
          
          
            
			}
      catch(PDOException $exception){
				echo "Connection error: " . $exception->getMessage();
			}
    }
}
			
         
		


?>