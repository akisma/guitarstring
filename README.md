# guitarstring

To install

1. https://gorails.com/setup/osx/10.9-mavericks (only good for Mavericks - others, see here () )
2. clone this
3. navigate to root of this repo
4. `bundle install`
5. `gem install compass` -- can this be folded into the bundle install command above?
6. TO DO: DB INSTALL INTRUX - CONFIG DIRECTIONS, then `rake db:create`
7. navigate to /public and run `npm install` - this will require that Node and NPM are installed on your system (see here https://docs.npmjs.com/getting-started/installing-node - I believe you can also do this via Homebrew http://blog.teamtreehouse.com/install-node-js-npm-mac)

Running the development environment

1. navigate to root/public
2. enter `gulp watch` - this will kickoff sass and js build watchers
3. in another terminal screen, enter `rails server`
4. navigate to localhost:3000 in your browser
