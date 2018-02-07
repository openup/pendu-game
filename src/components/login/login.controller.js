export default class LoginController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.heading = 'Veuillez saisir un Pseudo !';
		this.pseudo = '';
	};

}
