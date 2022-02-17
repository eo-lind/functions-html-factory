// HTML factory functions



const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerHTMLMaker = (computerObject) => {
    const computerHTMLSection = `<section>
    <h1>${computer.manufacturer} ${computer.make}</h1>
        <div>Model: ${computer.model}</div>
        <div>Memory: ${computer.specs.memory}</div>
        <div>Hard drive space: ${computer.specs.hardDrive}</div>
        <div>Processor speed: ${computer.specs.processor}</div>
</section>`
    return computerHTMLSection
}

const returnedHTML = computerHTMLMaker(computer)
console.log(returnedHTML)
 