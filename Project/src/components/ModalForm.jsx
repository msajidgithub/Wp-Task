import React from 'react'

function ModalForm() {
    return (
        <div>

<div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Recoard</h5>
                <button type="button" onClick={backBtn} className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                  <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                  <div style={{width: "100%"}}>
                <label htmlFor="name"> <span>Id : </span></label> 
              <input className="form-control mr-sm-2" type="text"  value={newData.id}  placeholder="User Id" aria-label="input" 
              onChange={(e)=> {
               console.log(e.target.value)
                setNewData({
                  id: e.target.value
                }
                  )
                  console.log('=====>',newData.id)
              }}
              />
              <br/>
            
                  </div><div style={{width: "100%"}}>
                <label htmlFor="name"> <span>FirstName : </span></label> 
              <input className="form-control mr-sm-2" type="text" value={newData.FirstName} placeholder="FirstName" aria-label="input" 
             />
            
                  </div>
                  <br/> 
                  <div style={{width: "100%"}}>
                  <label htmlFor="name"> <span>LastName : </span>  </label>
              <input className="form-control mr-sm-2" type="text" value={newData.LastName}  placeholder="LastName" aria-label="input" 
              onChange={(e) => {
                setNewData({ ...newData,
                  LastName: e.target.value 
                })
                console.log('Target Value ===>',e.target.value)
                console.log('newData',newData.LastName)

              }}/>
          
                    </div>   
               <br/>
         
              <div style={{width: "100%"}}><label htmlFor="name"> <span>Department : </span></label>
              <input className="form-control mr-sm-2" type="text" value={newData.Deparment} placeholder="Department" aria-label="input"  
                />
            </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={backBtn} data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={updateBtn}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      
            
        </div>
    )
}

export default ModalForm
