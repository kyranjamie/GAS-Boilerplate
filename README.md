GAS-Boilerplate
===============

Template structure for web applications utilising Google Apps Script HtmlService

## Documentation
https://developers.google.com/apps-script/import-export
https://www.youtube.com/watch?v=lEVMu9KE6jk
https://github.com/soundTricker/gas-manager/

## Instructions
Create project and enable **Drive SDK** and **Drive API** in Google API Console
Inside chosen dir, run 
```shell
$ npm install gas-manager
```
Then:
```shell
$ gas init
```
1. Enter clientID (omitting .apps.googleusercontent.com)
2. Enter Client secret
3. Create refresh-token
4. Create project file

This set up will create two files:
```
- gas-config.json
- gas-project.json
```
(These are in .gitignore as they're specific to each user).

## Sublime Text Build Script

**Creating build script**
Tools > Build System > New Build System
```json
{
  "working_dir": "${project_path}",
  "cmd": ["gas", "upload"],
  "path": "/usr/local/bin/"
}
```

### Generic Apps Script Limitations
- iframe nested within table > messy code
- "Caja Sanitization"
	Used to detect security violations
	i.e. external services with auth tokens (requring cookies) 				won't work
- Quote from Docs:
*"(Very old browsers, including Internet Explorer 8 and below, are usually incompatible with Html Service.)"*
https://developers.google.com/apps-script/
- Difficulties loading separate views.
