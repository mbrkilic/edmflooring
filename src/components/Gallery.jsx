import {data} from '../assets/data'

function Gallery() {
  return (
    

<div className=" justify-center grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className=" grid gap-4">
        
           <div className=''> {data.map((photo, index) => (
                <div key={index}>
                <img className="h-screen max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}</div>

            <div>
            {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}
            </div>

            <div> {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}</div>
    </div>

    <div className="grid gap-4">
        
           <div> {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}</div>


            <div>
            {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}
            </div>

            <div> {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}</div>
    </div>

    <div className="grid gap-4">
        
           <div> {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}</div>


            <div>
            {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}
            </div>

            <div> {data.map((photo, index) => (
                <div key={index}>
                <img className="h-auto max-w-full rounded-lg object-cover object-center" src={photo.imagelink} alt=""/>    
                </div>
            ))}</div>
    </div>  
</div>

  )
}

export default Gallery