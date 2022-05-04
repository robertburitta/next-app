import { createTheme } from '@vanilla-extract/css';
import { config } from './config';

const [themeClass, theme] = createTheme(config);

export { themeClass, theme };