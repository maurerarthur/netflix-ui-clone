set -e

npm run build

cd dist

git init
git checkout -b deploy
git add -A
git commit -m 'deploy'
git push -f git@github.com:maurerarthur/netflix-ui-clone.git main:gh-pages

cd -