// import { useState, useEffect } from "react";
// import styled from "styled-components";

export const CustomTableBody = () => {
  return (
    <></>
    // <Table>
    //   <thead>
    //     <tr>
    //       <td>
    //         First Name
    //         <IconSort onClick={() => handleSortColumn("firstname")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         Last Name
    //         <IconSort onClick={() => handleSortColumn("lastname")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         Start Date{" "}
    //         <IconSort onClick={() => handleSortColumn("startdate")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         Departement{" "}
    //         <IconSort onClick={() => handleSortColumn("department")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         Date of Birth{" "}
    //         <IconSort onClick={() => handleSortColumn("birthdate")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         Street{" "}
    //         <IconSort onClick={() => handleSortColumn("street")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         City{" "}
    //         <IconSort onClick={() => handleSortColumn("city")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         State{" "}
    //         <IconSort onClick={() => handleSortColumn("state")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //       <td>
    //         ZIP Code{" "}
    //         <IconSort onClick={() => handleSortColumn("zipcode")}>
    //           <SortIcon handleType={handleType} />
    //         </IconSort>
    //       </td>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {employeesFiltered && employeesFiltered.length > 0 ? (
    //       [...employeesFiltered].map((employee, idx) => {
    //         return (
    //           <tr key={idx}>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.firstname)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.firstname}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.lastname)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.lastname}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.startdate)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.startdate}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.department)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.department}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.birthdate)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.birthdate}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.street)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.street}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.city)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.city}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.state)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.state}
    //             </td>
    //             <td
    //               className={
    //                 searchWord && searchWord.includes(employee.zipcode)
    //                   ? "boldStyle"
    //                   : ""
    //               }
    //             >
    //               {employee.zipcode}
    //             </td>
    //           </tr>
    //         );
    //       })
    //     ) : (
    //       <tr className="fullwidth">
    //         <td>No Employee</td>
    //       </tr>
    //     )}
    //   </tbody>
    // </Table>
  );
};
