import React from 'react'

const Card = () => {
  return (
    <div>
    <div className="card mt-4">
      <img src="https://source.unsplash.com/random/300×300" className="card-img-top w-100" alt="..." style={{maxHeight:"200px"}} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and  
        </p>

         <div className="container w-100">
           <select className="m-2 h-100 bg-success">
             {
                Array.from(Array(6), (e,i)=>{
                    return (
                        <option key={i+1} value={i+1}>
                            {i+1}
                        </option>
                    )
                })
             }
           </select>
             <select m-2 h-100 bg-success rounded >
                <option value="half"> Half </option>
                <option value="full"> Full </option>
             </select>
              <div className="d-inline h-100 fs-5"> 
                Total Price
              </div>
         </div>
      </div>
    </div>
    </div>
   
  )
}

export default Card