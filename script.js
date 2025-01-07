// function getQueryParams(){
//     const params = new URLSearchParams(window.location.search);
//     return {
//         fullname : params.get('fullname'), contact:params.get('contact'), username:params.get('username')
//     };
// }

// function dispalyUserDetails() {
//     const {fullname,contact,username} = getQueryParams();
//     document.getElementById('fullname').textContent = fullname || "N/A";
//     document.getElementById('contact').textContent = fullname || "N/A";
//     document.getElementById('username').textContent = fullname || "N/A";
// }

// document.addEventListener('DOMContentLoaded',dispalyUserDetails);