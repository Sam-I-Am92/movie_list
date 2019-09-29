# MOVIE LIST WORKSHOP

## STEPS
  * 1) make a repo
  * 2) make html file / package.json
  * 3) install dependancies
  * 4) setup babel / webpack
  * 5) make a bare bones server
  * 6) make html file in dist folder
  * 7) make index.jsx file in client/src

## MAKE A REPO
  * git init
  * npm init
    * package-lock = log of installs & uninstalls (history)
  * make new repo from github
    * follow instructions on screen
    * remotes are sources that are not located on computer
  * commit and push files

  * git pull origin master
    * updates code on computer; pulls from repo
    * will not delete data; lets you make choice about what to delete = merge conflicts
  
## STEPS TO MAKE A REPO
  * make a new directory
  * git init
  * npm init
    * [-y] flag says yes to everything; leaves fields blank
  * create new repo on github

## MAKE A WEBPACK FILE
  * why is webpack useful?
    * takes all our files, compiles them into one file
  * file name = webpack.config.js
  * install dev dependencies
    * --save-dev = dev dependencies
    * --save = dependencies
  
  * entry = highest level node of react file tree
    * highest level component
  * can only use import / export statements w/ webpack
    * webpack crawls through files using import / export statements
  * webpack still uses babel
  
## MAKE A REACT APP
  * 1) attach our react app to DOM inside of index.jsx
    * uses ReactDOM.render function