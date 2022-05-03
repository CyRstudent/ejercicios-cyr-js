const err = async () =>{
	await alert('No puedes votar, ven de nuevo cuando seas español y tengas mas de 18 años');
}
const p1 = prompt('Introduce tu pais de residencia').toLowerCase();
const p2 = Number(
	prompt('Introduce tu edad')
);
if(p1 == 'españa' && p2 >= 18) {
	alert('Puedes votar!')
} else {
	err();
}