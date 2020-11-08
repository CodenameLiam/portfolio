import React from "react";
import CodeBlock from "./Components/CodeBlock";
import { Home } from "./Pages/Home";
import "reactjs-popup/dist/index.css";

const App = () => {
	return (
		<div className="App">
			<Home />
		</div>
	);
};

export default App;

/* <CodeBlock input={codeString} language="java" /> */

// const codeString = `
// public static void run(String referenceFile, String dir) throws FileNotFoundException, IOException {
// 	List<Gene> referenceGenes = ParseReferenceGenes(referenceFile);

// 	for (String filename : ListGenbankFiles(dir)) {
// 		System.out.println(filename);
// 		GenbankRecord record = Parse (filename);
// 		for (Gene referenceGene : referenceGenes) {
// 			System.out.println(referenceGene.name);
// 			for (Gene gene : record.genes) {
// 				if (Homologous(gene.sequence, referenceGene.sequence)) {
// 					NucleotideSequence upStreamRegion = GetUpstreamRegion(record.nucleotides, gene);
// 					Match prediction = PredictPromoter(upStreamRegion);
// 					if (prediction != null) {
// 						consensus.get(referenceGene.name).addMatch(prediction);
// 						consensus.get("all").addMatch(prediction);
// 					}
// 				}
// 			}
// 		}
// 	}

// 	for (Map.Entry<String, Sigma70Consensus> entry : consensus.entrySet())
// 		System.out.println(entry.getKey() + " " + entry.getValue());
// }
// `.trim();
