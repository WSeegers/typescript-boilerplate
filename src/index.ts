const makeCounter = () => {
	let x = 0;
	return () => {
		console.log(`Counting... ${x++}`);
	};
};

function main() {
	console.log("Hello World!");
	console.log("TS boilerplating! (C_P)");

	const count = makeCounter();
	setInterval(count, 1000);
}

main();
