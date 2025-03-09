Deploy React Website (Vite) on GitHub Pages
Step 1: Create a repository on GitHub, for example, "DeployAtGitHub".

Step 2: Open your project in VS Code, then open the file named vite.config.js and add base: "/DeployAtGitHub" after the plugins line.

Step 3: Open package.json, after the name line, add "homepage": "https://mani30512b.github.io/DeployAtGitHub/", 
        then in the scripts section, add two key-value pairs: 
        "predeploy": "npm run build", and 
        "deploy": "gh-pages -d dist".

Step 4: Open the VS Code terminal and run the following commands line by line:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-URL>
git push -u origin main
Step 5: Run the command npm run deploy.

Your website is successfully deployed, and you can access it at https://mani30512b.github.io/DeployAtGitHub/.



      
       

