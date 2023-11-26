//category data loading section

const categorySection =async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    const datas = data.data;
    loop(datas);
    //return datas;
    searchByCategory(datas);
}

//category data showing section
//const categoryId = document.getElementById('category-section');
//categoryId.classList.add('category', 'flex', 'flex-row','justify-center');
const loop = datas =>{
    const categoryId = document.getElementById('category-section');
    categoryId.classList.add('category', 'flex', 'flex-row','justify-center');
    datas.forEach(data => {
       const makeDiv = document.createElement('div');
       makeDiv.innerHTML=`
       <div>
            <button onclick="mainDataLoading(${data.category_id})" class="btn btn-neutral m-3">${data.category}</button>
        </div>
       `
       categoryId.appendChild(makeDiv);
    });
}

// categorised data loading
const mainDataLoading =async (category_id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    const dataa = await res.json();
    const dataas = dataa.data;
    const categoryID = dataas[0].category_id;
    console.log(categoryID)
    mainData(dataas);
}

const mainData = (dataas) =>{
    const mainDataShowing = document.getElementById('main-data');
    mainDataShowing.textContent='';
    dataas.forEach(dataa=>{
        //console.log(dataa);
        const divMaking = document.createElement('div');
        divMaking.innerHTML=`
        <figure><img class='h-48' src="${dataa.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
          <div class="flex flex-row gap-5">
           <div>
           <img class='rounded-full w-16 h-16' src="${dataa.authors[0].profile_picture}">
           </div>
           <div>
           <h2 class="card-title">${dataa.title}</h2>
           <h2 class="profile-name">${dataa.authors[0].profile_name}</h2>
           <p>${dataa.others.views} views</p>
           </div>
          </div>
        </div>
        `
        mainDataShowing.appendChild(divMaking);
    }) 

}

//const searchByCategory = (datas) =>{
 //   datas.forEach(data=>{
   //     const catId = data.category_id;
     //   return catId;
    //})


//}









mainDataLoading();
categorySection();



















