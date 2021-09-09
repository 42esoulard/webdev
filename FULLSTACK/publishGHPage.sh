#!/bin/bash
LPURPLE='\033[1;35m'
NC='\033[0m' 

echo -e "${LPURPLE}Committing dist/...${NC}"
git add dist && git commit -m "Initial dist subtree commit"

echo -e "${LPURPLE}Pushing dist/ to gh-pages...${NC}"
git subtree push --prefix dist origin gh-pages

echo -e "${LPURPLE}Enjoy your freshly published github page @ 42esoulard.github.io/{repo} !${NC}"