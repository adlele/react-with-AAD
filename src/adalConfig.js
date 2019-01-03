import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
	tenant: '',
	clientId: '',
	endpoints: {
		api: ''
	},
	redirectUri: window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+window.location.port: ''),
	cacheLocation: 'localStorage'
};

export const authContext = new AuthenticationContext(adalConfig);
export const adalApiFetch = (fetch, url, options) => adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
