//cuando termina de bajar todo (archivo index que tiene dentro el link al css y js) 
//comienza a leer todo lo de adentro
$(document).ready(function()
{

	//ocultar objeto divt (llamar por tag)
	$("#divt").hide();

	//hacer algo cuando pone el mouse arriba de boton
	$("#E").mouseover(function()
	{
		//cambiar icono de mouse (llamar por clase)
		$(".boton").css("cursor", "pointer");

		//si #u y #p estan vacias 
		//.val --> levanta valor de elemento
		if ($("#u").val()== '' && $("#p").val() == '')
		{
			//meter en mensaje desde html y desocultarlo
			$("#divt").html ("Debe ingresar Usuario y Contraseña");
			$("#divt").show();

			//poner color de rojo
			$("#1").css("color","red");
			$("#2").css("color","red");

		}
		else if ($('#u').val() != '' && $('#p').val()=='')
		{
			$("#divt").html("Debe ingresar Contraseña");
			$("#divt").show();

			$("#2").css("color", "red");
		}
		else if ($('#u').val() == '' && $('#p').val() != '')
		{

			$("#divt").html("Debe ingresar Usuario");
			$("#divt").show();	

			$("#2").css("color", "red");
		}
		
		else
		{
			$("#divt").html("Bienvenido!");
			$("#divt").show();	
		} 

	});


});

//me falta:
//cambiar el color de los labels cuando falta info
//poner highlight a textboxes cuando apoyas mouse
//agarrar nombre y apellido de json con .ajax