import React from 'react';

const Sortex = () => {

    const rows = [
        { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
        { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
        { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
        { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
        { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
        { id: 6, name: 'Pete Hornberger', age: null, is_manager: true, start_date: '04-01-2000' },
        { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: null },
        { id: 8, name: null, age: null, is_manager: null, start_date: null },
      ]

      const columns = [
          {value: "name", label: "Name"},
          {value: "age", label: "Age"},
          {value: "is_manager", label: "Manager", truthy: "yes"},
          {value: "start_date", label: "Start Date"},
      ]

      const valuess = Object.keys(rows[0])

    //   const [ , name, age, manager, start_date] = valuess
    //   console.log(name, age)
    // const values= Object.keys(rows);
    // console.log(values)

    console.log(valuess)

    return(
        <div>
            <h3 className="text-3xl font-bold underline">Mellow</h3>

            <table className="table-fixed">
                <thead>
                <tr>
                    {columns.map((column) => {
                        return(
                            
                                <th className=" text-2xl underline" key={column.value}>{column.label}</th>
                        
                        )
                    })}
                </tr>
                </thead>

                <tbody>
                    {rows.map((row) => {
                        return(
                            <tr key={row.id}> 
                                {columns.map((column) => {
                                if(column.truthy){
                                    return(
                                        
                                        <td key={column.label}>{row[column.value] ? "✔️" : "✖️"}</td>
                                        )
                                   
                                }
                                return(
                                    <td key={column.label}>{row[column.value] ? row[column.value] : "No Info"}</td>
                                )
                                    
                                   
                                })}
                            </tr>
                        )
                    })}
                </tbody>

            </table>


        </div>
    )
}


export default Sortex