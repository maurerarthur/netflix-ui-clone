set -e

npm run build

cd dist

git init
git checkout -b deploy
git add -A
git commit -m 'deploy'

cd -