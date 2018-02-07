// loading css files
import styles from './styles/styles.scss';

// loading modules 
import './core/core.module';

import './app.components';

const appModule = angular
	.module('app-pendu', [
		'app.core',
		'ui.router',
		'app.header',
		'app.login',
		'app.game'
	]);

export default appModule;
