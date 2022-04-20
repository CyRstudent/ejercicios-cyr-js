const n = Number(
	prompt('Introduce un numero')
);
let str = 'El numero que has introducido es ';
if(n % 2 == 0) {
	str += 'par';
	alert(str);
} else {
	str += 'impar';
	alert(str);
}