## This is a Frontend for Pocketbase BE

You can run Pocketbase on your local PC

- Rename `.sample.env.local` from this repository to `.env.local`
- Update the Pocketbase api URL
- Run `npm i`
- Run `npm run dev`

Create a user in Pocketbase and use that credentials to authenticate
Setup your collection rules to allow access only for logged in users (`@request.auth.id != ""`)

### TODO

- Fix authentication data persistance on FE when reloading the page
