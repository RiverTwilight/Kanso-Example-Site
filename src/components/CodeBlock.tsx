import React, { PureComponent } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// 设置高亮的语言
import {
	jsx,
	javascript,
	sass,
	scss,
} from "react-syntax-highlighter/dist/cjs/languages/prism";

export default class extends PureComponent<{
	language: string;
	children;
}> {
	componentWillMount() {
		// 注册要高亮的语法，
		// 注意：如果不设置打包后供第三方使用是不起作用的
		SyntaxHighlighter.registerLanguage("jsx", jsx);
		SyntaxHighlighter.registerLanguage("javascript", javascript);
	}
	render() {
		const { language, children, inline } = this.props;

		if(inline){
			return(
				<code>{children}</code>
			)
		}
		console.log(this.props);
		return (
			<figure className="highlight">
				<SyntaxHighlighter language={language} style={atomDark}>
					{children}
				</SyntaxHighlighter>
			</figure>
		);
	}
}
