// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.



export const environment = {
  production: false,
  api_url : 'http://api.qa1.nbos.in',
  client_id: '13261c94-c778-4976-95f3-774b81591352',
  client_secret: 'web-app-secret',
  grant_type: 'client_credentials',
  tenant_id: 'TNT:STA-quvnya91',
  theme:'ng2',
};


export const environmentAdv = {
  production: true,
  api_url: 'https://wavelabs-olx-nonenunciatory-sage.au-syd.mybluemix.net',
  client_id: '2b84167e-fa95-4b55-b535-e328a0db0341',
  tenantId: 'TNT:OLX-gz2tq8fy'
}
