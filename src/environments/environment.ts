// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig;
export const environment = {
  production: false,
  firebaseConfig = [
    apiKey: 'AIzaSyAQ4LKqr4ptWsz4DoyR393gjewmrb6MAfU',
    authDomain: 'heccyeah-83ebe.firebaseapp.com',
    databaseURL: 'https://heccyeah-83ebe.firebaseio.com',
    projectId: 'heccyeah-83ebe',
    storageBucket: 'heccyeah-83ebe.appspot.com',
    messagingSenderId: '1019797612643',
    appId: '1:1019797612643:web:ca438d7c0c6ee4abc5b056',
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
