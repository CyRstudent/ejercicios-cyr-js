let n1 = Number(
	prompt('Introduce un numero')
);
const n2 = Number(
	prompt('Introduce otro numero')
);
const oper = prompt('Introduce un operador valido');
switch(oper) {
	case '+':
		n1 += n2
		break;
	case '-':
		n1 -= n2;
		break;
	case '*':
		n1 *= n2;
		break;
	case '/':
		n1 = n1 / n2;
		break;
	case '%':
		n1 = n1 % n2;
		break;
}
alert(`El resultado es ${n1}`);