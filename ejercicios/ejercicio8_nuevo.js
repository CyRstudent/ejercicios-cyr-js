let n1 = Number(
	prompt('Introduce un numero')
);
const n2 = Number(
	prompt('Introduce otro numero')
);
const oper1 = prompt('Introduce un operador');
const oper = [oper1];
const validChars = ['%', '/', '(', ')', '^', '*', '+', '-'];
while(!validChars.includes(oper[oper.length - 1])) {
	const ans = prompt('Introduce un operador que exista y no intentes algo mas');
	oper.push(ans);
} 

n1 = eval(`${n1}${oper}${n2}`);
alert(`El resultado es ${n1}`);