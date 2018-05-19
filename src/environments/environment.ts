// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.



export const environment = {
  production: false,
  token:'https://api.nbos.io/oauth/token',
  api_url : 'https://api.nbos.io',
  client_id: '7dc955a1-3d62-4d7a-9504-843a014d0d42',
  client_secret: 'test',
  grant_type: 'client_credentials',
  tenant_id: 'TNT:ANG-twcv3zaw',
  theme: 'mint',        // mint dark blur
};


export const environmentAdv = {
  production: true,
  api_url: 'https://wavelabs-olx-nonenunciatory-sage.au-syd.mybluemix.net',
  client_id: '',
  tenantId: 'TNT:OLX-gz2tq8fy',
};

export const environmentTodo = {
  api_url: 'http://php-todo.labs.nbos.io',
};
