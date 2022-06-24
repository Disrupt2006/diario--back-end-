//cuando termina de bajar todo comienza a leer todo lo de adentro
$(document).ready(function()
{

	//ocultar objeto divt (llamar por tag)
	$("#divt").hide();

	//hacer algo cuando pone el mouse arriba de boton
	$("#E").mouseover(function()
	{
		//cambiar icono de mouse (llamar por clase)
		$(".boton").css("cursor", "pointer");

		//si #u esta vacia
		//.val --> levanta valor de elemento
		if ($("#u").val()== '' && $("#p").val() == '')
		{
			//meter en mensaje desde html y desocultarlo
			$("#divt").html ("Debe ingresar Usuario y Contraseña");
			$("#divt").show();
		}
		else if ($('#u').val() != '' && $('#p').val()=='')
		{
			$("#divt").html("Debe ingresar Contraseña");
			$("#divt").show();
		}
		else if ($('#u').val() == '' && $('#p').val() != '')
		{
			$("#divt").html("Debe ingresar Usuario");
			$("#divt").show();	
		}
		
		else
		{
			$("#divt").html("Bienvenido!");
			$("#divt").show();	
		} 

	});


});