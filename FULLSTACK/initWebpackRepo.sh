#!/bin/bash
LPURPLE='\033[1;35m'
NC='\033[0m' 

# initialize package.json
echo -e "${LPURPLE}Initializing package.json...${NC}"
npm init

# initialize node_modules + webpack stuff
echo -e "${LPURPLE}Initializing webpack and node_modules...${NC}"
npm install webpack webpack-cli --save-dev 

# TO ADD CUSTOM PACKAGES
# echo -e "${LPURPLE}Adding custom packages...${NC}"
# npm install packageName --save

echo -e "${LPURPLE}Initializing arborescence...
        .gitignore
        src
            L index.js
        dist
            L index.html${NC}"
touch .gitignore && echo -e 'node_modules/' > .gitignore
mkdir src && touch src/index.js
mkdir dist && touch dist/index.html

echo -e '<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="main.js" defer></script>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <header>
    <h1></h1>
  </header>

  <main>
  
  </main>

  <footer>
    <div>Built by <a href="https://github.com/42esoulard">esoulard</a></div>
  </footer>
</body>
</html>' > dist/index.html


# TINIEST DEFAULT CONFIG WITH CSS, IMG AND FONT IMPORT
echo -e "${LPURPLE}Initializing webpack.config.js with a simple default config...${NC}"
touch webpack.config.js \
&& echo -e "/* global require module __dirname */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i, //import .css files
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i, //import image files
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i, //import font files
            type: 'asset/resource',
        },
        // { //comment out this rule to not use Babel
        //   test: /\.m?js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: [
        //         [
        //           '@babel/preset-env', 
        //           { 
        //             useBuiltIns: 'usage',
        //             corejs: 3,
        //             targets: "defaults"
        //           }
        //         ]
        //       ]
        //     }
        //   }
        // },
      ],
    },
};"  > webpack.config.js
# If you prefer and feel wild, create it by running
# echo -e "${LPURPLE}Initializing webpack.config.js with a the wild automated config...${NC}"
    # npx webpack
    # npx webpack-cli init

# TO IMPORT CSS/IMAGES/FONTS
echo -e "${LPURPLE}Initializing .css file...${NC}"
npm install --save-dev style-loader css-loader
touch src/style.css \
&& echo -e "/* @font-face {
  font-family: 'myFont';
  src: url('./my_font.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
} */

body, html {
  padding: 0px;
  margin:0px;
  min-height:600px;
  height:100%;
  min-width:350px;
}

h1 {
  margin: 0px;
}" > src/style.css
echo -e "import './style.css'" > src/index.js
# mv mySuperCoolImage.png src/ && mv mySuperCoolFont.tff src/
# echo -e "import './mySuperCoolImage.png'" > src/index.js
# echo -e "import './mySuperCoolFont.tff'" > src/index.js

# JS SYNTAX CHECK with eslint VScode extension 
# First install ESLint from the VScode Extensions menu
# then to install eslint globally, launch
# npm install -g eslint
echo -e "${LPURPLE}Initializing .eslintrc file for syntax checking in this repository...${NC}"
eslint --init
# JS STYLE REFORMATTING with Prettier VScode extension 
# First install Prettier from the VScode Extensions menu
echo -e "${LPURPLE}Initializing Prettier module for style reformatting in this repository...${NC}"
npm install prettier -D --save-exact
echo -e "${LPURPLE}Done! [Use cmd + shift + I to format open file]${NC}"

echo -e "${LPURPLE}Initializing Babel module for transpiling in this repository...${NC}"
npm install -D babel-loader @babel/core @babel/preset-env regenerator-runtime core-js webpack
echo -e "${LPURPLE}Done! [Use cmd + shift + I to format open file]${NC}"



echo -e "${LPURPLE}Project ready to launch! [npx webpack --watch]${NC}"
# TO COMPILE AND ACTUALIZE WITH EACH CHANGE
# echo -e "${LPURPLE}Launching webpack --watch...${NC}"
# npx webpack --watch
# In VS, GO LIVE and head to the dist directory