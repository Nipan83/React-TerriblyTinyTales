import React, { Component } from 'react';


class Send extends Component {
  render(){
    return(
      <div className="main">
        <h2>Word Frequncy</h2>
        <h4>Top {this.props.count} words and their frequency of occurrence in the frontend, in a tabular format</h4>
        <table className="table">
          <thead>
            <tr className="success">
              <th >Word</th>
              <th >Frequency</th>

            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item,i)=>{
              return <tr key={i} className="success">
                <td> {item[0]} </td>
                <td> {item[1]} </td>

              </tr>

            })}

    </tbody>
        </table>
      </div>



    );
  }
}
export default Send;
