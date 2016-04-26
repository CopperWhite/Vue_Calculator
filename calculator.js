document.addEventListener("DOMContentLoaded", 
	function(){
		new Vue({
			el:"#body",
			data:function(){
				return {
					number1:null,
					number2:null,
					result:null
				}
			},
			methods:{
				sum: function() {
					this.result = parseInt(this.number1) + parseInt(this.number2);
					},
				minus: function() {
					this.result = parseInt(this.number1) - parseInt(this.number2);
					},
				divide: function() {
					this.result = parseInt(this.number1) / parseInt(this.number2);
					},
				multiple: function() {
					this.result = parseInt(this.number1) * parseInt(this.number2);
					}
				}
			})
	}
)