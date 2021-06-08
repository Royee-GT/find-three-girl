const datapanel = document.querySelector("#data-panel");
const button = document.querySelector("button");
const url = "https://randomuser.me/api/?results=3&gender=female";

button.addEventListener("click", (f) => {
  axios.get(url).then((response) => {
    console.log(response);
    for (let i = 0; i < 3; i++) {
    const data = response.data.results[i];
      const user = {
name: `${data.name.first} ${data.name.last}`,
avatar: data.picture.large,
email: data.email
      }
    console.log(user)
      let div = document.createElement('div')
   let htmlContent = `
     <div class = "girls">
      <h3>${user.name}</h3>
      <img src="${user.avatar}">
      <p>${user.email}</p>
  </div>
    `
   console.log(htmlContent)
      div.innerHTML = htmlContent
   datapanel.append(div)
    }
  });
});
