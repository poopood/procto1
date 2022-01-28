// import { data } from 'autoprefixer';
import React, {useState, useEffect} from 'react';
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Mew = () => {
    const [wines, setWines] = useState([]);
    const [pp, setPP] = useState(true);
    const [pt, setPT] = useState(true);
    const [pc, setPC] = useState(true);
    const [pa, setPA] = useState(true);

    const [searchInput, setSearchInput] = useState("")
    const [filters, setFilters] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [winesCount, setWineCount] = useState(0);
    const [winesToDisplay, setwinesToDisplay] = useState([]);
    // const [columns, setColumns] = useState([
    //     {
    //         heading: "sku",
    //         label: "SKU"
    //     },
    //     {
    //         heading: "name",
    //         label: "Name"
    //     },
    //     {
    //         heading: "price",
    //         label: "CA$"
    //     },
    //     {
    //         heading: "available",
    //         label: "Availability",
    //         truthy: true
    //     }
    // ])

    const columns = [ {heading: "sku", label: "SKU"}, { heading: "name",  label: "Name" }, {heading: "price", label: "CA$"}, {  heading: "available", label: "Availability",  truthy: true  }]

    let pagesCount = Math.ceil( winesCount / 5);
    // console.log(pagesCount, "pagesCount")
    // let winesToDisplay = wines.slice((currentPage - 1) * 5, currentPage * 5);

    useEffect(() => {
     dataFetcher()
     

    }, [])

    useEffect(() => {
        
        // console.log(winesToDisplay, "winestodisplay")
        setwinesToDisplay(wines.slice((currentPage - 1) * 5, currentPage * 5))
        // setWines(winesToDisplay)
        // wines.sort((a,b) => {
        //     if(a.name.toLowerCase() < b.name.toLowerCase()){
        //         return -1
        //     }
        //     if(a.name.toLowerCase() > b.name.toLowerCase()){
        //         return 1
        //     }
        //     return 0
        // })
        // nameSorter();
        
    }, [currentPage, wines])

    // const nameSorter = () => {
      
    //    let sortedByName = wines.sort((a,b) => {
    //     if(a.name.toLowerCase() < b.name.toLowerCase()){
    //         return -1
    //     }
    //     if(a.name.toLowerCase() > b.name.toLowerCase()){
    //         return 1
    //     }
    //     return 0
    // })

    //     // let sorted = [...sortedByName];
    //     // sorted = !sorted;

    //     // return sorted;
    // }

    useEffect(() => {
     setWineCount(wines.length)
     setwinesToDisplay(wines.slice(0,5));
    }, [wines])
    console.log(winesCount, "winescount")
    console.log(winesToDisplay, "Wines to Diplay")


    const dataFetcher = async () => {
        const listOfWines = await fetch("http://localhost:3000/api/wines")
        const response = await listOfWines.json()
        // console.log(response)
        setWines(response)
        // return response
        
    }

    

    const nameSorter = () => {
        let sortedByName = wines.sort((a,b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()){
                    return -1
                }
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return 1
                }
                return 0
            })

            return sortedByName;
    }


    const sorterr = (heading) => {
        // filters.map((e) => {
        //     console.log(e[heading])
        // })
        // console.log(filters, "0 filters to filter")
        // console.log(filters[heading])
        // setFilters({...filters, filters[heading] = !filters[heading]})
        // setFilters((prevState) => {
        //     return {...prevState, [heading]: [heading].value = ![heading].value  }
        // })
        // setFilters({...filters, [heading]: [heading].value = ![heading].value })
        // console.log(filters[heading])
        // console.log(filters, "filters to filter")
        if(heading){
            if(heading === "name"){
                // let pp = true;
                
                let sortedByName;
                if(pp){
                    sortedByName = wines.sort((a,b) => {
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return -1
                    }
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1
                    }
                    return 0
                })

                } else{
                     sortedByName = wines.sort((b,a) => {
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return -1
                    }
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1
                    }
                    return 0
                  })
                }
                
    
                setWines(sortedByName)
                setwinesToDisplay(wines.slice((currentPage - 1) * 5, currentPage * 5))
                setPP(!pp)
                console.log(wines, "wines by sorted by me")
                console.log(pp, "pp")


            }
            if(heading === "sku"){
                let sortedBySKU;
                if(pt){
                    sortedBySKU = wines.sort((a,b) => {
                        
                    
                    return a.sku - b.sku

                   
                })

                } else{
                    sortedBySKU = wines.sort((b,a) => {
                    
                    return a.sku - b.sku
                  })
                }
                setWines(sortedBySKU)
                setwinesToDisplay(wines.slice((currentPage - 1) * 5, currentPage * 5))
                setPT(!pt)
                console.log(wines, "wines by sorted by me")
                console.log(pp, "pp")

            }

            if(heading === "price"){
                let sortedByPrice;
                if(pc){
                    sortedByPrice = wines.sort((a,b) => {
                        
                    
                    return a.price - b.price

                   
                })

                } else{
                    sortedByPrice = wines.sort((b,a) => {
                    
                    return a.price - b.price
                  })
                }
                setWines(sortedByPrice)
                setwinesToDisplay(wines.slice((currentPage - 1) * 5, currentPage * 5))
                setPC(!pc)
                console.log(wines, "wines by sorted by me")
                console.log(pp, "pp")
            }

            if(heading === "available"){
                let sortedByAvailability;
                if(pa){
                    sortedByAvailability = wines.sort((a,b) => {
                        
                    
                    return a.available - b.available

                   
                })

                } else{
                    sortedByAvailability = wines.sort((b,a) => {
                    
                    return a.available - b.available
                  })
                }
                setWines(sortedByAvailability)
                setwinesToDisplay(wines.slice((currentPage - 1) * 5, currentPage * 5))
                setPA(!pa)
                console.log(wines, "wines by sorted by me")
                console.log(pa, "pp")
            }

        }

     
        setFilters(heading)
        console.log(heading)
    }


    console.log(filters, "filters")
    // console.log(!!wines.length && wines[0], "wines")

    const sercher = (e) => {
        e.preventDefault();
    
        // console.log(e.target.value)
        setSearchInput(e.target.value.toLowerCase());
        // let inputFilter;
        // inputFilter = wines.filter((val) => {
        //     if(val === " "){
        //         return val
        //     }else if(val.name.toLowerCase().includes(searchInput)) {
        //         return val
        //     } 

        //     // return val
        // })
        // console.log(inputFilter)

        // setWines(inputFilter);
        // setwinesToDisplay(wines.slice((currentPage - 1) * 5, currentPage * 5))
        // setSearchInput("")
        
        
    }

    // useEffect(() => {
    //     console.log("EEEEEEEEEEEEEEEE");
       


    // }, [searchInput])
      
    
    return(
        <div>
<div  className="bg-white p-8 rounded-md w-full">
     

      <div className=" flex items-center justify-between pb-6">
        <div>
          <h2 className="text-gray-800 font-semibold">Wines Catalog</h2>
          <span className="text-gray-800  text-xs">All wines by Availability</span>
        </div>
        <div className="flex bg-gray-50 items-center p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd" />
            </svg>
            <input 
            onChange={(e) => {sercher(e)}}
            className="bg-gray-50 outline-none ml-1 mr-5 w-60 block " type="text" name="" id="" placeholder="search..." />
        </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          {/* <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <WineTable />

          </div> */}

        </div>

        
        


      

      
    </div>
                
            <div  className="container flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {columns.map((column) => {
                            
                            return(
                                <th 
                                onClick={() => {sorterr(column.heading)}}
                                scope="col" 
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 hover:text-gray-900 uppercase tracking-wider cursor-pointer" 
                                key={column.heading}>
                                    <FontAwesomeIcon
                                    className="jju"
                                    icon={faSort}
                                    />
                                    &nbsp;&nbsp;
                                    <span >{column.label}</span></th>
                            )
                            
                        })}
                    </tr>
                    <tr>
                        <td></td>
                        <td className="px-1 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {/* <input
                            onChange={(e) => {sercher(e)}}
                            className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        /> */}

                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                        {wines.filter((wine) => {
                            // return wine
                                if(wine === " "){
                                    return wine
                                }else if(wine.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchInput)) {
                                    return wine
                                } 
                            
                        }).slice((currentPage - 1) * 5, currentPage * 5).map((wine) => {
                            return(
                                <tr key={wine.sku}>
                                    {columns.map((column) => {
                                        if(column.truthy){
                                            return (
                                                wine[column.heading] ? (
                                                    <td 
                                                    className="text-green-500"
                                                    key={column.label}>Available</td>
                                                ) :
                                                ( 
                                                    <td
                                                    className="text-red-500"
                                                    key={column.label}>Not Available</td>
                                                )
                                                
                                            )
                                        
                                        } else if(column.heading === "thumbnail"){
                                            return (
                                                <td key={column.label}><img src={wine[column.heading]} alt="" width="60"/></td>
                                            )
                                        } else if(column.heading === "name"){
                                            return(
                                                <td 
                                                className="jju12"
                                                key={column.label}>
                                                    
                                                    <img src={wine["thumbnail"]} alt="" width="60"/> 
                                                    <span className="j2">{wine[column.heading]}</span>
                                                     </td>
                                            )
                                        }

                                        return(
                                            <td key={column.label}>{wine[column.heading]}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                </tbody>

            </table>
            </div>
                        <div className="pagination_buttons inline-flex">
                            <button 
                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                            onClick={() => setCurrentPage(1)}
                            >First   </button>
                            <button 
                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4  "
                            onClick={() => {
                                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                            } 
                            >Previous   </button>
                            <button 
                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4  "
                            onClick={() => {
                                setCurrentPage(currentPage < pagesCount ? currentPage + 1 : pagesCount)}
                            }
                            >Next   </button>
                            <button  
                            className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                            onClick={() => setCurrentPage(pagesCount)}
                            >Last   </button>
                        </div>
                        <div className="text-xs xs:text-sm text-gray-900 text-center	">
                        <p>Page {currentPage} to {pagesCount} of {wines.length} entries</p>
                        </div>
            </div>
            </div>
            </div>


        </div>
    )
}


export default Mew;