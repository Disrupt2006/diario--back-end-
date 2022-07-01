<?php
#conexion base de datos 
$con = new mysqli ("localhost", "root", "rootroot");
#Seleccionar base de datos
mysqli_select_db($con, "diario");

#Prevenir error de conexion (si hay error, que mate el proceso)
if ($con->connect_error)
{	
	#Mata proceso
	die ("Connection failed: " . $con->connect_error);
}

#Login
$sql="SELECT id_usu FROM usuarios WHERE usuario='" . $_REQUEST['usu'] . "' AND contrasenia='" . $_REQUEST['PASS'] . "'";

#Resultado que devulve la base de datos
$res = $con->query($sql);

$i = 0;  #representa a las filas, si no existen sera 0

#Devuelve cantidad de filas que tiene resultado (si existe 1,sino 0)
if ($res->num_rows > 0)
{
	#exuste usuario con esta combinacion
	$data ['status'] = 'err';
	$data ['result'] = '';
	
}
else
{
	$sql="INSERT INTO usuarios (id_usu, contrasenia, nombre, apellido, dni) VALUES ('".$_REQUEST['usu']."','".$_REQUEST['pass']."','".$_REQUEST['ape']."','".$_REQUEST['dni']."')";

	$res = $con -> query($sql);

	if ($res == 1)
	{
		$data ['status'] = 'ok';
		$data ['result'] = '1';	
	}
}

#se encoda a json y se retorna
echo json_encode($data);

#cerrar conexion
$con->close();

#localhost/diario/php/validar.php?usu=yo&PASS=123


?>