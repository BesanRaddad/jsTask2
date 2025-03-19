async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    const result = data.map(function(user){
          return `
             <div class = 'user'>
                <h3>Name: ${user.name}</h3>
                <P>ID: ${user.id}</P>
                <email> <i class="fa-solid fa-envelope"></i>   ${user.email}</email>
                <p> <i class="fa-solid fa-phone"></i>   ${user.phone}</p>
                <div class = "address">
                  <i class="fa-solid fa-location-dot"></i>   Address: 
                <p>City: ${user.address.city}</p>
                <p>Street: ${user.address.street}</p>
                </div>
             </div>
          `
    }).join(' ');
    document.querySelector(".users").innerHTML = result;
}
getUsers();