//Reviews
const Reviews = () => {
    return (  
     <div className="reviews">
     <h6>Reviews</h6>
     <h4>7,776</h4>
     </div>
    );
}; 

 //Average rating
const Average = () => {
   return(
     <div className="average">
        <h6>Average Rating</h6>   
        <h4>4.6</h4>
     </div>
   ); 
};    

// Sentiment Analysis  
const Sentiment = () => {
  return (
     <div className="sentiment">
        <h6>Sentiment Analysis</h6>
        
          <h4>960</h4>
          <h4>122</h4>
          <h4>321</h4>
    </div>
  ); 
};
  

const Card=()=>{
    return(
        <div id="card"></div>
    )
}


// Website Visitors  (gray)
const Visitors = () => {
  return(
     <div className='visitors'>
     <h2>Visitors</h2>         
     <h3>821</h3>
     <Card />
    </div>
  ); 
};

  
// //Image (dark gray)
// const image = () => {
//   return(
//     <div className='image'></div>
//   )  
// }

const Sidebar = () => {
    return (  
      <div className="sidebar"> 
            
              <h5>Dashboard</h5>
              <h5>Widget</h5>
              <h4>Reviews</h4>
              <h4>Customers</h4>
              <h4>Online Analysis</h4>
              <h4>Settings</h4>
              
      </div>
    );
  };
  
  const Board =()=>{
    return(
        <div className="board">
            <Sidebar />
            <Reviews /> 
            <Average />
            <Sentiment />
            <Visitors />
        </div>
    )
}


// // App Component
class App extends React.Component {
    render() {
        return(
        <div className="container">
           <Board />
        </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));