import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";





        function Updateitem (props){

            const{id} = useParams()
            const history = useNavigate()
            //const url = '/allsup'
            
            
            //console.log(id)
            
         
            const[itemname,setitemname] = useState("")
            const[itemprice,setitemprice] = useState("")
            const[itemamount,setitemamount] = useState("")
            


            useEffect(()=>{
                let getitem = () =>{
                    axios.get('http://localhost:'+id)
                    .then((res) =>{
                        
                        setitemname(res.data.itemname)
                        setitemprice(res.data.itemprice)
                        setitemamount(res.data.itemamount)
                      
                    })
                }

                getitem()
            },[])

           
                
                    
               
            
            const update = (e) =>{
                e.preventDefault()

                const upitemlist = {
                   
                    itemname,
                    itemprice,
                    itemamount
                }
            

                axios.put('http://localhost:3001/acceptsupplier/update/'+id,upitemlist)
                .then(()=>{
                    alert('Item is updated successfully')
                    //history.push(url)
                   
                }).catch((err)=>{
                    console.log(err)
                })
            }
            

           
            return(
              <div>
              <section class="h-100 bg-dark">
              <form onSubmit={(e) => {update(e)}}>
              <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col">
                    <div class="card card-registration my-4">
                      <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                          <img
                            src="https://www.kindpng.com/picc/m/131-1317997_agriculture-farmer-field-crop-farmer-icon-png-free.png"
                            alt="Sample photo"
                            class="img-fluid"
                            style={{bordetopleftradius:".15rem" ,borderbottomleftradius:".15rem",height:"750px"}}
                          />
                        </div>
                        <div class="col-xl-6">
                          <div class="card-body p-md-5 text-black">
                            <h3 class="mb-5 text-uppercase">Update Item Details</h3>
            
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Item Name</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={itemname}
                                onChange={(e)=> {setitemname(e.target.value)}} />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Price</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={itemprice}
                                onChange={(e) => {setitemprice(e.target.value)}} />
                            </div>
            
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example97">Amount</label>
                                <input type="text" id="form3Example97" class="form-control form-control-lg"
                                defaultValue={itemamount}
                                onChange={(e) => {setitemamount(e.target.value)}} />
                            </div>
            
                            <div class="d-flex justify-content-end pt-3">
                              <button type="submit" class="btn btn-warning btn-lg ms-2">Update</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </form>
            </section>
            </div>
            

            );
 
};




export default Updateitem;