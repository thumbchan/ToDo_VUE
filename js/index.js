window.onload=function(){
	new Vue({
		el:'#box',
		data:{
			myData:[],
			username:'',
			age:'',
			nowIndex:-10
		},
		methods:{
			add:function(){
				this.myData.push({
					name:this.username,
					age:this.age
				});
				this.username='';
				this.age='';
			},
			deleteMse:function(n){
				if(n==-2){
					this.myData=[];
				}else{
					this.myData.splice(n,1);
				}
			}
		}
	});
	
	
}
