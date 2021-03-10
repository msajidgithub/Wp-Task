if(category == '' ){
    toast.error('Department can not be Empty', {autoClose:3000}) 		    
   }

   if(typeof category !== "undefined"){
      if(!category.match(/^[a-zA-Z]+$/)){
    toast.error('Department should only letter', {autoClose:3000}) 		    
      }        
   }
  
  // userName
  if(userName == '' ){
    toast.error('User name can not be Empty', {autoClose:3000}) 		    
   }

   if(typeof userName !== "undefined"){
      if(!userName.match(/^[a-zA-Z]+$/)){
    toast.error('User name should only letter', {autoClose:3000}) 		    
      }        
   }
   //Email
   if(userEmail == ''){
    toast.error('Email is not valid', {autoClose:3000}) 		    
   }
   if(typeof userEmail !== "undefined"){
      let lastAtPos = userEmail.lastIndexOf('@');
      let lastDotPos = userEmail.lastIndexOf('.');
  
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && userEmail.indexOf('@@') == -1 && lastDotPos > 2 && (userEmail.length - lastDotPos) > 2)) {
    toast.error('Email Format should be like this /n form@gmail.com', {autoClose:3000}) 		    
      
      }
  }       