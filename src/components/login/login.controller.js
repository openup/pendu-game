export default class LoginController {
	constructor() {
		'ngInject';
	}

	$onInit = () => {
		this.heading = 'Veuillez saisir un Pseudo !';
		this.pseudo = '';
	};

}
