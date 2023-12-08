import { useState, useEffect } from 'react';

const Api = () => {
	const [quotes, setQuotes] = useState([])
	const [counter, setCounter] = useState(0)
	const [numQuotes, setNumQuotes] = useState(1)



 useEffect(()=>{
				fetch(`https://api.quotable.io/quotes/random?limit=${numQuotes}`)
				.then(response => {
					if(response.status >= 200 && response.status < 300) {
						return response.json();
					} else {
						throw new Error(response.statusText)
					}
				}).then(data=>{
				setQuotes(data);
				console.log(data)
				// eslint-disable-next-line react-hooks/exhaustive-deps
		})}, [counter])



		const [isLoading, setIsLoading] = useState(true)
 	const [isError, setIsError] = useState(false)
		const [user, setUser] = useState('Default User')



		useEffect(() => {
  		fetch(`https://api.quotable.io/quotes/random?limit=${numQuotes}`)
  		.then((response) => {
   		if(response.status >= 200 && response.status <= 299) {
    		return response.json
   		} else {
    		setIsLoading(false)
    		setIsError(true)
    		throw new Error(response.statusText)
   		}
  		}).then((user) => {
  			const {login} = user
  			setUser(login)
  			setIsLoading(false)
 			}).catch((error) => {console.log(error)})
				// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [counter])




		if(isLoading) {
  return (
   <div>
				<h1 className='err'>Welcome: {user}</h1>
    <h1 className='err'>Loading.....</h1>
   </div>
  )
 }
 if(isError) {
  return (
   <div>
    <h1 className='err'>Error...</h1>
   </div>
  )
 }

		return (
    <div className="main-container">
      {quotes.map((quote) => {
        const { author, content } = quote;
        return (
          <div className='material'>
            <h2 className='title'>{author}: </h2>
            <h3 className="content">{content}</h3>
          </div>
        );
      })}
      <input type="number" class='numQuotes' min='1' max='5' defaultValue='1' onChange={(e) => setNumQuotes(e.target.value)} />
      <button className="btn" onClick={() => { setCounter(counter + Number(numQuotes)) }}>ReGenerate</button>
      <h4 className="counter">Number of Quotes Generated: {counter}</h4>
    </div>
  );
}

export default Api;