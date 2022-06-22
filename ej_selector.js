const answers = [];
const ans1 = prompt('Introduce un numero de ejercicio');
const validAns = ['_nuevo'];
for(let i = 1; i <= 8; i++) {
	validAns.push(i.toString());
}
answers.push(ans1);
while(
	!validAns.includes(
		answers[
			answers.length - 1
		]
	)
) {
	const ans = prompt('Introduce algo real la proxima vez');
	answers.push(ans);
}
const str = `ejercicio${answers[answers.length - 1]}.js`;
window.open(str);
