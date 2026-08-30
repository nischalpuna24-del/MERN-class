// local storage --> permamently sotre data in browsers
// session sotrage --> temporarily sotres data in browsers
// cookies --> small amount of data stores

// // setdata, getdata, updatedata, deletedata
// // localStorage
// localStorage.setItem("name","ram")

// localStorage.getItem("name")

// localStorage.setItem("name","ramdai")

// localStorage.removeItem("name")

// // SessionStorage
// sessionStorage.setItem("age",12)

// sessionStorage.getItem("age")

// sessionStorage.setItem("age",26)

// sessionStorage.removeItem("age")


// // Cookies
// // document.cookie = "email=abc@gmail.com"
// // document.cookie = "age=56"
// // document.cookie = "email=nika@gmail.com"



const obj ={
    name:'ram',
    age:30,
    salary:20000
}

localStorage.setItem("obj", JSON.stringify(oj))
