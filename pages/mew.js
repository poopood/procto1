
import React, {useState, useEffect} from 'react';
import Pagination from '../src/components/Pagination';
import Header from '../src/components/Header';
import Table from '../src/components/Table';
import {nameSorter, skuSorter, priceSorter,availabilitySorter} from "../src/utils/helperFunctions";



const Mew = () => {
    const [wines, setWines] = useState([]);
    const [nameFilter, setnameFilter] = useState(true);
    const [skuFilter, setskuFilter] = useState(true);
    const [priceFilter, setpriceFilter] = useState(true);
    const [availabilityFilter, setavailabilityFilter] = useState(true);
    const [searchInput, setSearchInput] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [winesCount, setWineCount] = useState(0);

    

    const columns = [ {heading: "sku", label: "SKU"}, { heading: "name",  label: "Name" }, {heading: "price", label: "CA$"}, {  heading: "available", label: "Availability",  truthy: true  }]

    const pagesCount = Math.ceil( winesCount / 5);
    const winesLength = !!wines.length && wines.length;


    useEffect(() => {
        dataFetcher()
    }, [])




    useEffect(() => {
     setWineCount(wines.length)
 
    }, [wines])



    const dataFetcher = async () => {
        const rootUri = process.env.REACT_APP_SERVER_URL
                        ? process.env.REACT_APP_SERVER_URL
                        : 'http://localhost:3000';

        const listOfWines = await fetch(`${rootUri}/api/wines`)
        const response = await listOfWines.json()
        setWines(response)
        
    }


    const sorterr = (heading) => {
       
            if(heading === "name"){
                setWines(nameSorter(nameFilter, wines))
                setnameFilter(!nameFilter)
            }
            if(heading === "sku"){
                setWines(skuSorter(skuFilter, wines))
                setskuFilter(!skuFilter)
            }

            if(heading === "price"){
                setWines(priceSorter(priceFilter, wines))
                setpriceFilter(!priceFilter)
            }

            if(heading === "available"){
                setWines(availabilitySorter(availabilityFilter, wines))
                setavailabilityFilter(!availabilityFilter)
            }



    }

    const sercher = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value.toLowerCase());

    }


    return(
        <div>

          <Header sercher={sercher}/>
    
                
            <div  className="container flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {/*  */}

            <Table
                columns={columns}
                wines={wines}
                currentPage={currentPage}
                searchInput={searchInput}
                sorterr={sorterr}
            />
            </div>
            
            <Pagination 
            currentPage={currentPage}
            pagesCount={pagesCount}
            winesLength={winesLength}
            setCurrentPage={setCurrentPage}
            />
            </div>
            </div>
            </div>


        </div>
    )
}


export default Mew;