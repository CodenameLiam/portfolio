import React from "react";
import reactStringReplace from "react-string-replace";

type language = "java" | "python" | "javascript";

export default function CodeBlock(props: { input: string; language: language }) {
	const { input, language } = props;

	const block: any = input.split(/\n/gm).map((part: any) => {
		// Words
		Object.keys(highlighter[language]).map((replace: string) => {
			part = reactStringReplace(part, new RegExp(`(${replace})`, "g"), (match) => (
				<span className={highlighter[language][replace]}>{match}</span>
			));
		});
		// Strings
		part = reactStringReplace(part, /("[^]*")/g, (match) => <span className="orange">{match}</span>);

		return (
			<div className="line">
				<code className="line-text">{part}</code>
			</div>
		);
	});

	console.log(reactStringReplace("test this one", /()/g, (match) => match));

	return (
		<div className="code">
			<div className="border">
				<div className="purple" />
				<div className="red" />
				<div className="orange" />
				<div className="blue" />
			</div>
			<div className="block">{block}</div>
		</div>
	);
}

const highlighter: any = {
	java: {
		if: "purple",
		public: "purple",
		static: "purple",
		void: "purple",
		for: "purple",
		Map: "purple",
		Entry: "purple",
		String: "purple",
		List: "purple",
		"Match ": "purple",
		throws: "purple",
		Sigma70Consensus: "purple",
		FileNotFoundException: "purple",
		IOException: "purple",

		System: "red",
		out: "red",

		run: "blue",
		println: "blue",
		get: "blue",
		Parse: "blue",
		entry: "purple",

		null: "orange",
	},
};
