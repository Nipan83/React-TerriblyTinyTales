import React, { Component } from 'react';


class App extends Component {


  componentWillMount () {
                          }
    render(){

    return(

        <body>
        <div className="main">
         <h2>Word Frequncy</h2> 
          <div className="wrapper" id="pages">
        			<form action="/Send" method="post">
        			     <input id="input" type="text" name="count" placeholder="Type a number"/><br/>
        			     <button type="submit" className="btn btn-success">submit</button>
              </form>
         </div>
        </div>

        </body>






    );
  }
}
export default App;
