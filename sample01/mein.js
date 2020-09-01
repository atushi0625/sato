const pwd = document.getElementById('password');
const pwdCheck = document.getElementById('password-check');
pwdCheck.addEventListener('change' , function(){
  if(pwdCheck.checked) {
    pwd.setAttribute('type' , 'text');
  } else{
    pwd.setAttribute('type' , 'password');
  }
}, false);
console.log(pwdCheck);


{
   


    const btn = document.getElementById('text');
    
    btn.addEventListener('click' , () =>{
      btn.textContent = '登録されました'
      alert('登録完了');
      
    });

  }   



    
      
  









