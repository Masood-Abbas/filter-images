// let tabs = document.querySelectorAll(".tabs li");
// let images = document.querySelectorAll(".menu_images img");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     let category= tab.dataset.categorie;
//     tabs.forEach((t) => t.classList.remove("active"));
//     tab.classList.add("active")
//     images.forEach((img)=>{
//       const imgCategory=img.dataset.categorie
//       if(category==="all"||imgCategory===categorie){
//         img.style.display="block";
//       }else{
//         img.style.display="none"
//       }
//     })
//   });
// });
let tabs = document.querySelectorAll(".tabs li");
let images = document.querySelectorAll(".menu_images img");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let category = tab.dataset.categorie;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    images.forEach((img) => {
      const imgCategory = img.dataset.categorie;

      (category === "all" || imgCategory === category) ? (img.style.display = "block"): (img.style.display = "none");
    });
  });
});
