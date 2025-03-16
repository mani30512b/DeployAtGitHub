# Deploy React Website (Vite) on GitHub Pages

## Step 1: Create a GitHub Repository
Create a repository on GitHub, for example, **"DeployAtGitHub"**.

## Step 2: Update `vite.config.js`
Open your project in VS Code, then open the file named **`vite.config.js`** and add:
```javascript
base: "/<your_project_name>",
```
after the `plugins` line.

## Step 3: Update `package.json`
Open `package.json`, after the `name` line, add:
```json
"homepage": "https://<your_github_user_name>.github.io/<your_project_name>/",
```
Then, in the scripts section, add two key-value pairs:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

## Step 4: Run Deployment Commands
Open the VS Code terminal and run the following commands line by line:
```sh
npm install gh-pages --save-dev

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-URL>
git push -u origin main
```

## Step 5: Deploy to GitHub Pages
Run the following command:
```sh
npm run deploy
```

Your website is successfully deployed, and you can access it at:
[https://mani30512b.github.io/DeployAtGitHub/](https://mani30512b.github.io/DeployAtGitHub/)

