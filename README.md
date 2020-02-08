# develop google function

1. install cloud sdk: https://cloud.google.com/sdk/docs/
1. run "gcloud init" to setup login
1. gcloud components update
1. npm i
1. npm start - this will start the function on watch mode.
1. execute REST against the URL given in logs. for example: http://localhost:8080
1. note that if you change function name in index.ts (export const finalPrice ==> finalPrice2 for example) you need to change function name in npm script tasks: start and deploy as well.

# test

1. npm t
1. to see coverage, run: npm run coverage.
1. in vscode, go to test explorer and enable autorun. this will run the tests whenever you change the code automatically. you can also debug a test via test explorer.

# debug

1. you can debug by clicking f5 in vscode, or choosing "launch via npm". additionally, you can attach to running process
1. if IDE stops only on js code, it means it can't find the source map files. make sure they are generated in tsconfig.json (sourceMaps: true) and that the vscode can find them: in launch.json check outFiles points to the folder that contains the source map files.
1. debug on production: https://cloud.google.com/debugger/

# deploy

1. npm run deploy
1. if you need to change the region of the function:
   - list all available regions via: gcloud functions regions list
   - in packages.json change the --region argument to the desired value
