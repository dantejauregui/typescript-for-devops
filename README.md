# TS Scripts

## TS challenge workflow:
your workflow is:

- Write your code in each .ts script file from the `/src/codewars_scripts` directory.

- Run `npm run build`. 
This command will now first delete the old dist folder and then create a fresh one with all your .ts compiled files. 
Also, consider if you installed NODEMON as dev dependency, this will compile for you automatically everytime you "save" a new change in the file.

- Run your script with: 
```
node dist/codewars_scripts/your_script_name.js
```