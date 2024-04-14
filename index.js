let seeAllFlag = true
let addRecipeObj = {
    recipeName: "",
    imgUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
    description: "",
}

let todoList = [
    {
        recipeName: "Sweet pumpkin soup",
        rating: 3,
        imgUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
        description: "A comforting blend of roasted pumpkin, creamy coconut milk, and warm spices, this sweet pumpkin soup is the perfect fall indulgence.",
        reviews: "40"
    },
    {
        recipeName: "Spicy chicken bowl",
        rating: 4,
        imgUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
        description: "A delicious fusion of tender chicken, vibrant vegetables, and fiery spices, this spicy chicken bowl is sure to tantalize your taste buds.",
        reviews: "30"
    },
    {
        recipeName: "Salad chicken soup",
        rating: 4,
        imgUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png",
        description: "A light and refreshing soup featuring succulent chicken, crisp vegetables, and fragrant herbs, this salad chicken soup is a delightful choice for a healthy meal.",
        reviews: "20"
    },
    {
        recipeName: "Sweet pumpkin soup",
        rating: 3,
        imgUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png",
        description: "A comforting blend of roasted pumpkin, creamy coconut milk, and warm spices, this sweet pumpkin soup is the perfect fall indulgence.",
        reviews: "40"
    },
    {
        recipeName: "Spicy chicken bowl",
        rating: 4,
        imgUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png",
        description: "A delicious fusion of tender chicken, vibrant vegetables, and fiery spices, this spicy chicken bowl is sure to tantalize your taste buds.",
        reviews: "30"
    },
    {
        recipeName: "Salad chicken soup",
        rating: 4,
        imgUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png",
        description: "A light and refreshing soup featuring succulent chicken, crisp vegetables, and fragrant herbs, this salad chicken soup is a delightful choice for a healthy meal.",
        reviews: "20"
    },
]

let unListEle = document.getElementById("unListId");
let addReciepe = document.getElementById("addReciepe")
let addReciepeMainContainer = document.getElementById("addReciepeMainContainer")
const mainDescEl = document.getElementById("desciptionReciepeMainContainer")
let cancelReciepe = document.getElementById("cancelReciepe")
let checkReciepeBtn = document.getElementById("checkReciepeBtn")

function windowFixed() {
    document.body.style.overflow = 'hidden';
}

function windowRelease() {
    document.body.style.overflow = '';
}

function addReciepeList(event, id) {
    addRecipeObj[id] = event.target.value
}

function addBtnReciepe() {
    let imaged = document.getElementById("imgUrl")
    let recName = document.getElementById("recipeName")
    let desc = document.getElementById("description")
    imaged.value = ""
    recName.value = ""
    desc.value = ""
    const itemsList = getParsedTodoList()
    const randomIndex = Math.floor(Math.random()*3)
    addRecipeObj.rating = [3,4,5][randomIndex]
    addRecipeObj.reviews = [30,40,20][randomIndex]
    let values = Object.values(addRecipeObj)
    let isValidObject = values.every(each => each !== "")
    if (isValidObject) {
        const updatedItemsList = [...itemsList, addRecipeObj]
        unListEle.innerHTML = ""
        localStorage.setItem("todoList", JSON.stringify(updatedItemsList));
        addReciepeMainContainer.classList.remove("add-reciepe-main-container-flex")
        unListEle.classList.add("see-all-fn")
        seeAllFlag = false
        windowRelease()
        listOfItems(updatedItemsList)
    } else {
        alert("Add the Mandatory Fields *")
    }
}

function seeAllChevron() {
    if (seeAllFlag) {
        unListEle.classList.add("see-all-fn")
        seeAllFlag = false
    } else {
        unListEle.classList.remove("see-all-fn")
        seeAllFlag = true
    }
}

function getParsedTodoList() {
    let getStoredItem = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(getStoredItem);
    if (parsedTodoList === null) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        return todoList;
    } else {
        return parsedTodoList;
    }
}

function checkReciepe(list) {
    windowFixed()
    let desc = list.description
    const descEl = document.getElementById("checkDescriptionPara")
    descEl.textContent = desc
    mainDescEl.classList.add("add-reciepe-main-container-flex")
}

function listOfItems(card) {
    card.map((list)=>{
        let mainList = document.createElement("div");
        mainList.classList.add("about-main-list-card");
        let listImg = document.createElement("img")
        listImg.src = list.imgUrl
        listImg.classList.add("about-list-img");
        mainList.appendChild(listImg)
        let listEle = document.createElement("li");
        listEle.classList.add("about-list-card");
        let listheadingEle = document.createElement("h1");
        listheadingEle.textContent = list.recipeName
        listheadingEle.classList.add("about-recipe-name");
        listEle.appendChild(listheadingEle)
        let firstCon = document.createElement("div")
        firstCon.classList.add("about-card-rating")
        listEle.appendChild(firstCon)
        let secondCon = document.createElement("div")
        for (let i = 1; i <= Number(list.rating); i++) {
            let iframe = document.createElement("i")
            iframe.style.color = "gold"
            iframe.classList.add("bi", "bi-star-fill")
            secondCon.appendChild(iframe)
        }
        firstCon.appendChild(secondCon)
        let reviews = document.createElement("p")
        reviews.textContent = `( ${list.reviews} reviews )`
        reviews.classList.add("about-rating-name")
        firstCon.appendChild(reviews)
        let horLine = document.createElement("hr")
        horLine.classList.add("about-hr")
        listEle.appendChild(horLine)
        let thirdCon = document.createElement("div")
        thirdCon.classList.add("check-container")
        listEle.appendChild(thirdCon)
        let par2 = document.createElement("p")
        par2.textContent = '20 mins'
        par2.classList.add("about-rating-name")
        thirdCon.appendChild(par2)
        let button = document.createElement("button")
        let anchor = document.createElement('a')
        anchor.href = '#desciptionReciepeMainContainer'
        anchor.textContent = 'Check recipe'
        anchor.classList.add("anchor-check-recipe")
        button.appendChild(anchor)
        button.onclick = () => checkReciepe(list)
        button.classList.add("check-recipe")
        thirdCon.appendChild(button)
        mainList.appendChild(listEle);
        unListEle.classList.remove("noItems")
        unListEle.appendChild(mainList);
    })
}

addReciepe.onclick = function () {
    windowFixed()
    let imaged = document.getElementById("imgUrl")
    let recName = document.getElementById("recipeName")
    let desc = document.getElementById("description")
    imaged.value = ""
    recName.value = ""
    desc.value = ""
    addReciepeMainContainer.classList.add("add-reciepe-main-container-flex")
}

cancelReciepe.onclick = function () {
    windowRelease()
    addReciepeMainContainer.classList.remove("add-reciepe-main-container-flex")
}

checkReciepeBtn.onclick = function () {
    windowRelease()
    mainDescEl.classList.remove("add-reciepe-main-container-flex")
}

const search = () => {
    let filterValue = document.getElementById("searchInput").value
    let getStoredItem = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(getStoredItem);
    unListEle.innerHTML = ""
    if (filterValue) {
        const filtered = parsedTodoList.filter(each => each.recipeName.toLowerCase().includes(filterValue.toLowerCase()))
        if(filtered.length){
            listOfItems(filtered)
        } else{
            unListEle.textContent = "No search items"
            unListEle.classList.add("noItems")
        }
    } else {
        listOfItems(parsedTodoList)
    }
}

let card = getParsedTodoList()
listOfItems(card)

