# alkemy

---

Heroes es un proyecto Web desarrollado con el Angular, se utilizaron los componentes de boottrap para renderizar el front, la aplicacion permite armar un grupo de seis superheroes, de los cuales 3 pueden ser con orientacion buena y tres mala, la aplicacion muestra los valores de cada unos de los poderes de cada heroe, de forma globar el grupo la plicacion muestra el valos de los poderes por grupo y el promedio de altura y peso. Para la aplicacion se crea aplicativo backend para la generacion de token, se intento consumir la api indicada en la documentacion para tal fin pero indicaba error.


----


# Tecnologías 

	*angular-cli                    		11.0.7
	*angular             					11.0.7
	*rxjs                            		6.6.3
	*typescript                     	 	4.0.5
	*Node: 									14.17.1
	*MongoDB
	*JWT
	*bcriptjs 
	*cors 
	*express 
	*express-validator 
	*mongoose

-------

# Instalacion y acceso al aplicativo

	* Se crea Base de datos en MongoDb para el login, la cadena de conexion:
		BD_CNN=mongodb+srv://eareiza:UnCBCqbB4ClLqMtf@clustertutoangular.ljd5e.mongodb.net/myAngular
	* El aplicativo heroeBack se corre con el siguiente comando: (Ya tiene configurada la cadena de conexion a la base de datos)
		npm run dev 
	* El aplicatiivo heroe (Angular) se corre con el siguiente comando:
		ng serve -