function rowCreator(){
	let RecordeWrapper = document.getElementById("wrapper");
	let row = document.createElement("tr");
	row.innerHTML = `<td>
					  <input type="checkbox" id="index"/>
					  <label for="index"><span>1</span></label>
					</td>
					<td>
					  <div class="display-icon-sm">
						<img class="imagefix" src="https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" alt="Profile">
					  <div>
					</td>
					<td>Santosh Kumar</td>
					<td>Santosh@gmail.com</td>
					<td>9102772001</td>
					<td>
					  <button class="btn btn-red theme-btn" type="button" title="Delete"><i class="ri-delete-bin-6-line"></i></button>
					  <button class="btn theme-btn btn-yellow" type="button" title="Edit"><i class="ri-file-edit-line"></i></button>
					   <button class="btn btn-green theme-btn" type="button" title="Calculator"><i class="ri-profile-line"></i></button>
					</td>`
		RecordeWrapper.appendChild(row);
		}
		

rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();
rowCreator();


const userProfile = document.getElementById("user-profile");
const toggleUser = document.querySelector(".toggle-profile");

userProfile.addEventListener("click", () => {
  toggleUser.style.transform = toggleUser.style.transform === "scale(1)" ? "scale(0)" : "scale(1)";
});




// Form Toggle open or close
let toggleForm = document.getElementById("toggelAddRecord");
function toggleClose() {
	toggleForm.style.transform = "scale(.1)";
	toggleForm.style.top = "-50%";
	toggleForm.style.left = "50%";
  }
  function toggleOpen() {
	toggleForm.style.transform = "scale(1)";
	toggleForm.style.transform = "translate(-50%, -50%)";
	toggleForm.style.top = "50%";
	toggleForm.style.left = "50%";
  }