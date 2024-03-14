let fname = document.getElementById("fname"),
    lname = document.getElementById("lname"),
    communityId = document.getElementById("communityId"),
    course = document.getElementById("course");

let fellowFullname = document.getElementById("fellowFullname"),
    fellowId = document.getElementById("fellowId"),
    fellowCourse = document.getElementById("fellowCourse");

let submit = document.getElementById("submit");


document.addEventListener("DOMContentLoaded", function(){
    submit.addEventListener("click", run);
    function run(){
        let newFname = fname.value,
            newLname = lname.value,
            newCommunityId = communityId.value,
            newCourse = course.value,
            uploadImage = document.getElementById("uploadImage");


            let file = uploadImage.files[0];
            if (file) {
                let reader = new FileReader();
                
                reader.addEventListener('load', function() {
                    imagePreview.src = reader.result;
                    localStorage.setItem("image", reader.result);
                });
                
                reader.readAsDataURL(file);
            }
            // localStorage.setItem("image", JSON.stringify(userInput))
    
        fellowFullname.innerText = `${newFname} ${newLname}`;
        fellowId.innerText =  `${newCommunityId}`;
        fellowCourse.innerText =  `${newCourse}`;
        // document.getElementById("imagePreview").setAttribute("src", JSON.parse(localStorage.getItem("image")))
  
}
      
});


