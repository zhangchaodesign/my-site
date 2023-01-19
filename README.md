# My Site
Host for my personal website.

## Build Setup

```bash
# install dependencies
$ yarn

# build in dev mode
$ yarn dev

# build for production
$ yarn build

# deploy
$ git add -f dist
$ git commit -m 'update cv'
$ git push origin --delete gh-pages
$ git subtree push --prefix dist origin gh-pages
$ git push
```