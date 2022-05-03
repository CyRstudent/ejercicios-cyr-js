let index = prompt('Introduce un dia de la semana');
if(index < 1 || index > 7) {
	alert(`${index} no es un numero valido`);
} else {
	const arr = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
	const element = arr[index - 1];
	alert(`El dia de la semana numero ${index} es ${element}`);
}