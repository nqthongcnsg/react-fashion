import Header from './Components/Header';
import Product from './Components/product';

import React,{Component} from 'react'
class Demo extends Component{
	onAddProduct = ()=>{
		console.log(this.refs.name.value);
	}
	render(){
		var  products= [
		   {
		   	id:1,
		   	name : 'Iphone6 plus',
		   	price: 1600000,
		   	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZGggVKHEAb2-AFWYiGEW9NajWojHAnIn3C6WM6w-WPi-Rvnr1F24vBRRpY28Kz8pR1k&usqp=CAU',

		   },
		   {
		   	id:2,
		   	name: 'Iphone12 128G',
		   	price:160000000,
		   	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOhWezr2g6G11Zidm4dDryMqcXjYa8-vM7IlQL-7vcR899Gy-N91cu9aUSFRFJJe_F9g&usqp=CAU',
		   	
		   },
		    {
		   	id:3,
		   	name : 'Iphone6 plus',
		   	price: 1600000,
		   	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZGggVKHEAb2-AFWYiGEW9NajWojHAnIn3C6WM6w-WPi-Rvnr1F24vBRRpY28Kz8pR1k&usqp=CAU',

		   },
		   {
		   	id:4,
		   	name : 'Iphone6 plus',
		   	price: 1600000,
		   	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZGggVKHEAb2-AFWYiGEW9NajWojHAnIn3C6WM6w-WPi-Rvnr1F24vBRRpY28Kz8pR1k&usqp=CAU',

		   },
		   
		  
		  
		   
		];
		let element=products.map((product,index)=>{
			return <Product   
			                     key={product.id}
						         name={product.name}
							     price={product.price}
							     image={product.image}
						  >

			</Product>
		});
		return (
		<div>
			<Header/>
			<div className="container">
				<div className="row">
				  <div className="row">

				       	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				       		
				       			<div className="panel panel-danger">
				       				<div className="panel-heading">
				       					<h3 className="panel-title">Thêm Sản Phẩm</h3>
				       				</div>
				       				<div className="panel-body">
				       					
				       		
								       			<div className="form-group">
								       				<label className>Tên Sản Phẩm</label>
								       				<input type="text" className="form-control" ref="name"/>
								       			</div>
								       		
								       			
								       		
								       			<button type="submit" className="btn btn-primary" onClick ={ this.onAddProduct } >Lưu</button>
								       				</div>
				       			</div>
				       		
				       	</div>
				    
				    	
				    
				    	
				    
				    	
				    
				  	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				  		{ element}
				  	</div>
				  </div>
					
				</div>
			</div>
		</div>
		)
	}
}
export default Demo;