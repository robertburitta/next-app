import { globalStyle } from '@vanilla-extract/css';
import { theme } from './theme.css';

globalStyle('html, body', {
	margin: 0,
	padding: 0,
	fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans- serif'
});

globalStyle('a', {
	color: theme.colors.blue,
	textDecoration: 'none',
});

globalStyle('a:hover', {
	color: theme.colors.blueHover
});

globalStyle('*', {
	boxSizing: 'border-box'
});