// import the useState and useEffect methods
import {useState, useEffect} from 'react'

// main js for the page visits counter
const PageViewCounter = () => {
  // useState for the page visits counter
  const [count, setCount] = useState(0);
  //  useEffect that triggers on page change
  useEffect(() => {
   // sets views to be a locally stored variable
   let views = localStorage.getItem("pageViews");
   // sets temp to equal views as a number or if views doesnt equal anything it equals 0
   let temp = Number(views) || 0;
   // sets count to equal temp + 1 
   setCount(temp+1);
   // resets the local storage variable to an updated value  
   localStorage.setItem("pageViews", temp+1);

  }, []);

  // return for the page visits counter so app can run them
  return (
    <div className='flex-container'>
      {/* loads the count for the user to see */}
      <h1 className='counter'>Visits: {count}</h1>
    </div>
  );
}

// exports it for other components to use
export default PageViewCounter