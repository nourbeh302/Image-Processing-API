# Image-Processing-API

###  Running scripts

```sh
# Installing dependencies
npm i

# To transpile the TypeScript
npm run build

# To clear the build file
npm run clean

# To start the server
npm start

# To format files using prettier
npm run prettier

# To check for errors
npm run lint

# To run test suite
npm run test
```

###  URIs to be tested

```sh
# Valid query data to create image
- http://localhost:8000/api/images?filename=leaves.png&width=700&height=500

# Only the file name was provided
- http://localhost:8000/api/images?filename=leaves.png

# Invalid file name
- http://localhost:8000/api/images?filename=mouse.png&width=400&height=900
```