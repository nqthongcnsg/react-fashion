import React,{useState,useEffect} from "react";
import API from "../../API";


const Refesh =()=>{
	const [user,setUser]=useState();
	const [searchTerm, setSearchTerm] = useState(0);
	useEffect(()=>{
        API.getUser(searchTerm).then((res)=>{
            if(res.data.success){
                setUser(res.data.result)
            }
        }) 
		
      
    },[searchTerm]);

	const onClick=()=>{
	

      let email=document.getElementById('email').value;


     
  if(email==''){
      alert("Không được bỏ trống");
  }else{
	let n=false;
			for( let i =0;i<user.length;i++){
				if (user[i].email==email)
				{
					n=true
				
				}
			}
			if(n){
		 
            
		      let pass="e10adc3949ba59abbe56e057f20f883e"
              let data={matkhau:pass,email:email};

               API.updatePass(data).then((res)=>{
                if(res.data.success){
                    alert("Mật khẩu đã được cài lại, xem thông tin được gửi ở email" );
                }
                   
            
                })
				window.location='/'
			    
			}
			else(
				alert('Không tìm thấy tài khoản có email này')
			)
		
  }
}


return(
    <>
    <div class="banner-top">
	<div class="container">
		<h1>Quên Mật Khẩu</h1>
		<em></em>
		<h2><a href="/">Trang chủ</a><label>/</label>Quên Mật Khẩu</h2>
	</div>
</div>

<div class="container login">
		<div class="login">
		
			<form>
			<div class="col-md-6 login-do">
            <label><b>Hãy nhập email của bạn vào đây</b></label>
				<div class="login-mail">
                   
					<input type="text" placeholder="Email" id="email"/>
					<i  class="glyphicon glyphicon-envelope"></i>
				</div>
			
				  
		
				
				<label class="hvr-skew-backward">
				<div  class="hvr-skew-backward" onClick={onClick}>Gửi</div>
				</label>
			</div>
			<div class="col-md-6 login-right">
				 <h3>Đăng ký tài khoản miễn phí</h3>
				 
				 <p></p>
				<a href="/register" class=" hvr-skew-backward">Đăng ký</a>
			

			</div>
			
			<div class="clearfix"> </div>
			</form>
		</div>

</div>

    </>
)
}
export default Refesh;