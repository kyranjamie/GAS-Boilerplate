GAS-Boilerplate
===============

Template structure for creating web applications with Google Apps Script

## Documentation
https://developers.google.com/apps-script/import-export
https://www.youtube.com/watch?v=lEVMu9KE6jk 
https://github.com/soundTricker/gas-manager/

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

**Limitations / Hinderances**
- iframe nested within table > messy code
- "Caja Sanitization"
	Used to detect security violations
	i.e. external services with auth tokens (requring cookies) 				won't work
- Quote from Docs:
*"(Very old browsers, including Internet Explorer 8 and below, are usually incompatible with Html Service.)"*
