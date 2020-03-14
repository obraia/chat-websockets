import { createGlobalStyle } from 'styled-components';
import { shade, lighten } from 'polished'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
}

body{
    background: ${props => props.theme.colors.background};
    font-family: sans-serif;
    color: ${props => props.theme.colors.textBackground};
}

@media only screen and (min-width: 560px) {
	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	::-webkit-scrollbar-track {
		background: rgba(0,0,0,0.1); 
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
	}
}

code[class*="language-"],
pre[class*="language-"] {
	color: ${props => props.theme.colors.textBackground};;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}
`;
