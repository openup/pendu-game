import loginComponent from './login.component';

const loginModule = angular.module('app.login', []);

// loading components...
loginModule.component('login', loginComponent);

// export this module
export default loginModule;
