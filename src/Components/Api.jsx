import { useState, useEffect } from 'react';

const Api = () => {
	const [quotes, setQuotes] = useState([])
	const [counter, setCounter] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
 const [isError, setIsError] = useState(false)
	const [user, setUser] = useState('Default User')
	const url = 'https://api.quotable.io/random?limit=3';
 useEffect(()=>{
			fetch(url)
			.then(response => {
				if(response.status >= 200 && response.status < 300) {
				return response.json();
				} else {
					throw new Error(response.statusText)
				}
			}).then(data=>{
				setQuotes(data);
		})}, [counter])

		useEffect(() => {
  	fetch(url)
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
		}, [])

		if(isLoading) {
  return (
   <div>
    <h1>Loading.....</h1>
   </div>
  )
 }
 if(isError) {
  return (
   <div>
    <h1>Error...</h1>
   </div>
  )
 }

		return (
				<div>
					<h2 className='title'>{quotes.author}: </h2>
					<h3 className="content">{quotes.content}</h3>
					<button className="btn" onClick={()=>{setCounter(counter + 1)}}>ReGenerate</button>
					<h4 className="counter">Number of Quotes Generated: {counter}</h4>
				</div>
		)
}

export default Api

