
<table className="table" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Date Of Birth</th>
      <th scope="col">Gender</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
   { userdata.length > 0 ? userdata.map((val)=>{
     console.log('Map Value', val)
      return(
        <tr>
          <td scope="row">{val.id}</td>
          <td>{val.userName}</td>
          <td>{val.userEmail}</td>
          <td>{val.gender}</td>
          <td>{val.contact}</td>
          <td>{val.dob}</td>
          <td><button type='button' onClick={() => delBtn(val.id,val.userName)} className="btn-1"><i className="fa fa-trash"></i></button></td>
          <td><button type="button" className="btn-1"><i className="fa fa-edit"></i></button></td>
        </tr>
      )
   })
   : <h1>Loading...</h1>}
  </thead>
 
</table>