        //Disable Right Click
        document.addEventListener("contextmenu", function(e){
            e.preventDefault();                          
        }, false);
        
        //Disable Shortcyt Key
        document.addEventListener("keydown", function(e){
            if(e.ctrlKey || e.keyCode==123){
                e.stopPropagation();
                e.preventDefault();
            }
        });
		
		
		let btnSubmit = document.getElementById("submit-btn");
        btnSubmit.onclick = (e) => {
			e.preventDefault();
            let pwdField = document.getElementById("floatingPassword").value;
            const PWD = "English@book1";
            
            if(pwdField == PWD) {
            console.log(pwdField);
                let overlay = document.querySelector(".overlay");
                overlay.style.display = "none";
				pwdField = " ";
            }else{
                let msg = document.getElementById("msg");
                msg.style.display = "block";
            }
        }
		
		let logoutBtn = document.getElementById("logout-btn");
		logoutBtn.onclick = (e) => {
			let overlay = document.querySelector(".overlay");
            overlay.style.display = "flex";
		}
        
