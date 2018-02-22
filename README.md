# wordFrequencyLister
It is an application that accepts a number input N with a Submit button and on entering a value and pressing submit, a request sent to the backend that returns top N most frequently occurring words in the file  http://terriblytinytales.com/test.txt.



## OVERVIEW
### endpoints

#### GET
#### /
> Displays the home page that accepts a number input N with a Submit button.

#### POST
#### /send
> This endpoint is responsible for the result page that shows the top N most frequently occurring words in the file  http://terriblytinytales.com/test.txt.
> algo.js is responsible for fetching the data from the http://terriblytinytales.com/test.txt page and creating the object with top N key value pair that is returned and rendered to result.ejs page.

### Libraries and plugins used
    ####"react": "^16.2.0",
    ####"react-dom": "^16.2.0",
    ####"react-router": "^4.2.0",
    ####"webpack": "^3.11.0"

    #### "babel-core": "^6.26.0",
    #### "babel-istanbul": "^0.12.2",
    #### "body-parser": "~1.18.2",
    #### "cookie-parser": "~1.4.3",
    #### "debug": "~2.6.9",
    #### "ejs": "~2.5.7",
    #### "express": "~4.15.5",
    #### "morgan": "~1.9.0",
    #### "path": "^0.12.7",
    #### "request": "^2.83.0",
    #### "serve-favicon": "~2.4.5"
    #### "chai": "^4.1.2",
    #### "mocha": "^5.0.1",
    #### "standard": "^11.0.0",
    #### "supertest": "^3.0.0"
   



## INSTALLATION 

- Clone the repository `git clone https://github.com/Nipan83/React-TerriblyTinyTales.git
- Install all dependecies `npm install`
- Start the server `npm start`



### Routes 

##### GET


 `http://localhost:3000/`
 
 This route displays the home page that accepts a number input N with a Submit button.
 
 
 ##### POST
 
 `http://localhost:3000/send`
 
  This route displays the top N words and their frequency of occurrence in the frontend, in a tabular format
 
 
 ## BUILD

```sh
# To build bundle.js files
webpack -w


```
## WEBPACK CONFIG

```sh
module.exports = {
	entry: {
		app: "./react-src/src/App.js"
	},
	output: {
		filename:"build/bundle.js",
        sourceMapFilename: "build/bundle.map"
	},
    devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
		]
	}
}
```

## AUTHOR 

[@Nipan83](https://github.com/Nipan83) - nipandas83@gmail.com
