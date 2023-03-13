/* ------------------------------ GIO HANG -------------------*/
var get = document.querySelector.bind(document)
let getAll = document.querySelectorAll.bind(document)

let productButtons = getAll('.product-content-button button')
var itemList = {
    "sp001": {
        "name": 'ĐẮC NHÂN TÂM',
        "price": 125000,
        "photo": '/img/hot-item-1.png'
    },
    "sp002": {
        "name": '6 Chickenjoy',
        "price": 170000,
        "photo": '../Data/Chicken&Burgers/6-wings.png'
    },
    "sp003": {
        "name": 'Chicken Burgers',
        "price": 50000,
        "photo": '../Data/Chicken&Burgers/mcchicken-deluxe.png'
    },
    "sp004": {
        "name": 'Pork Burgers',
        "price": 40000,
        "photo": '../Data/Chicken&Burgers/pork_burger.png'
    },
    "sp005": {
        "name": '6 Nuggets Chicken',
        "price": 50000,
        "photo": '../Data/Chicken&Burgers/6pcs_chicken_mcnuggets.png'
    },
    "sp006": {
        "name": '9 Nuggets Chicken',
        "price": 70000,
        "photo": '../Data/Chicken&Burgers/9pcs-chicken-mcnuggets.png'
    },
    "sp007": {
        "name": '1 Spicy chicken',
        "price": 30000,
        "photo": '../Data/Chicken&Burgers/1-ga-ran.png'
    },
    "sp008": {
        "name": 'Sprite',
        "price": 20000,
        "photo": '../Data/Dinks/Product_thumb_Sprite.png'
    },
    "sp009": {
        "name": 'Coca Cola',
        "price": 20000,
        "photo": '../Data/Dinks/mcd-food-beverages-soft-drinks-coke.png'
    },
    "sp010": {
        "name": 'Fanta',
        "price": 20000,
        "photo": '../Data/Dinks/hero-pdt-Fanta-201703_0.png'
    },
    "sp011": {
        "name": 'Dasani',
        "price": 15000,
        "photo": '../Data/Dinks/dasani_water.png'
    },
    "sp012": {
        "name": 'Spaghetti',
        "price": 50000,
        "photo": '../Data/Other foods/rice-spaghetti-534x374px._miy-thitbam_2.png'
    },
    "sp013": {
        "name": 'Beef spaghetti',
        "price": 60000,
        "photo": '../Data/Other foods/rice-spaghetti-534x374px._miy-thitbo_1.png'
    },
    "sp014": {
        "name": 'Beef rice',
        "price": 50000,
        "photo": '../Data/Other foods/rice-spaghetti-534x374px._com-thitbo_1.png'
    },
    "sp015": {
        "name": 'Chicken BBQ',
        "price": 50000,
        "photo": '../Data/Other foods/rice-spaghetti-534x374px._com-ganuong_1.png'
    },
    "sp016": {
        "name": 'Chicken Moffin',
        "price": 40000,
        "photo": '../Data/Other foods/muffin-big.png'
    },
    "sp017": {
        "name": 'Chocolate Icecream',
        "price": 15000,
        "photo": '../Data/Other foods/hotfudge_mcsundae.png'
    },
    "sp018": {
        "name": 'Strawberry Icecream',
        "price": 15000,
        "photo": '../Data/Other foods/strawberry-mcsundae.png'
    },
    "sp019": {
        "name": 'Fries',
        "price": 20000,
        "photo": '../Data/Other foods/regular_world_famous_fries.png'
    }
}

/*Hàm thêm sản phẩm vào Giỏ hàng**/
function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    var name = itemList[code].name;
    if (number == 0) return;
    if (typeof localStorage[code] === "undefined") {
        window.localStorage.setItem(code, number);
    } else {
        var current = parseInt(window.localStorage.getItem(code));
        if (current + number > 100) {
            window.localStorage.setItem(code, 100);
            alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của " + name + " này.");
            return;
        }
        else
            window.localStorage.setItem(code, current + number);
    }
    alert("Đã cập nhật sản phẩm " + name + " với số lượng " + number + " vào giỏ hàng. Số lượng sản phẩm " + name + " đã đặt là " + parseInt(window.localStorage.getItem(code)) + ".");
}
/*Hàm mở trang Giỏ hàng**/
function openCart() {
    location.href = "giohang.html";
}
/*Hàm thêm sản phẩm vào Giỏ hàng**/
function addCart(code) {
    var number = parseInt(document.getElementById(code).value);
    var name = itemList[code].name;
    if (number == 0)
        return;
    /*i. Kiểm tra sự tồn tại của mã sản phẩm trong localStorage, nếu không tồn tại thì thêm mới và thiết
    lập giá trị cho mã sản phẩm*/
    if (typeof localStorage[code] === "undefined") {
        window.localStorage.setItem(code, number);
    }
    else {
        var current = parseInt(window.localStorage.getItem(code));
        /* ii. Nếu mã sản phẩm đã tồn tại thì kiểm tra tổng của số lượng sản phẩm đã đặt
        và số lượng sản phẩm đặt mới có vượt quá 100 hay không*/
        if (current + number > 100) {
            window.localStorage.setItem(code, 100);
            alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của " + name + " này.");
            return;
        }
        else
            window.localStorage.setItem(code, current + number);
    }
    alert("Đã cập nhật sản phẩm " + name + " với số lượng " + number + " vào giỏ hàng. Số lượng sản phẩm " + name + " đã đặt là" + parseInt(window.localStorage.getItem(code)) + ".");
}
function getDiscountRate() {
    var d = new Date();//lấy ngày hiện tại của máy tính
    var weekday = d.getDay();//lấy ngày trong tuần
    var totalMins = d.getHours() * 60 + d.getMinutes();//đổi thời gian hiện tại ra số phút trong ngày.
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}
//hàm hiển thị nội dung giỏ hàng
function showCart() {
    var formatter = new Intl.NumberFormat('vi-VN',
        { style: 'currency', currency: 'VND' });
    var
        container = document.getElementById("cartDetail").getElementsByTagName('tbody')[0]; container.innerHTML = "";
    var sum = 0;//tổng mỗi mặt hàng
    var totalPreTax = 0;//tổng trước thuế
    var discountRate = getDiscountRate();//tỉ lệ khuyến mãi
    var taxRate = 0.1;//tỉ lệ thuế
    var discount = 0;//tiền giảm giá
    var tax = 0;//tiền thuế.
    for (var i = 0; i < window.localStorage.length; i++) {
        if (typeof itemList[localStorage.key(i)] === "undefined")
            continue;
        var tr = document.createElement("tr");
        var photoCell = document.createElement("td");
        var nameCell = document.createElement("td");
        var priceCell = document.createElement("td");
        var numberCell = document.createElement("td");
        var sumCell = document.createElement("td");
        var removeCell = document.createElement("td");
        var removeLink = document.createElement("a");
        var item = itemList[localStorage.key(i)];
        var number = localStorage.getItem(localStorage.key(i));
        photoCell.style.textAlign = "center";
        photoCell.innerHTML = "<img src='" + item.photo + "' class='round-figure'width='100px'/>";
        nameCell.innerHTML = item.name;
        priceCell.innerHTML = formatter.format(item.price);
        priceCell.style.textAlign = "right";
        numberCell.innerHTML = number;
        numberCell.style.textAlign = "right";
        sum = number * item.price;
        sumCell.innerHTML = formatter.format(sum);
        sumCell.style.textAlign = "right";
        removeLink.innerHTML = "<i class='fa fa-trash icon-pink'></i>";
        removeLink.setAttribute("href", "#");
        removeLink.setAttribute("data-code", localStorage.key(i));
        removeLink.onclick = function () {
            removeCart(this.dataset.code);
        };
        removeCell.style.textAlign = "center";
        removeCell.appendChild(removeLink);
        tr.appendChild(photoCell);
        tr.appendChild(nameCell);
        tr.appendChild(numberCell);
        tr.appendChild(priceCell);
        tr.appendChild(sumCell);
        tr.appendChild(removeCell);
        container.appendChild(tr);
        totalPreTax += sum;
    }
    var discount = totalPreTax * discountRate;
    var tax = (totalPreTax - discount) * taxRate;
    document.getElementById("bill_pre_tax_total").innerHTML = formatter
        .format(totalPreTax);
    document.getElementById("bill_discount").innerHTML = discountRate + " x A= " + formatter.format(discount);
    document.getElementById("bill_tax").innerHTML = formatter
        .format(tax);
    document.getElementById("bill_total").innerHTML = formatter
        .format(totalPreTax - discount + tax);
}
/*Hàm xóa sản phẩm khỏi đơn hàng:
Hàm xóa sản phẩm khỏi đơn hàng được cài đặt như sau: */
function removeCart(code) {
    if (typeof window.localStorage[code] !== "undefined") {
        //xóa sản phẩm khỏi localStorage
        window.localStorage.removeItem(code);
        //Xóa nội dung của phần thân của bảng (<tbody>)
        document.getElementById("cartDetail").getElementsByTagName('tbody'
        )[0].innerHTML = "";
        //Hiển thị lại nội dung của đơn hàng
        showCart();
    }
}/*Hàm hiển thị nội dung keyword trong trang timkiem.html**/
function showSearch() {
    var url = new URL(window.location);
    var ws = url.searchParams.get("words");
    document.getElementById("searchDetail").innerHTML = "<h1>Từ khóa tìmkiếm</h1> <b>" + ws + "</b>";
}
//Cập nhật trang chi tiết đơn hàng khi cập nhật số lượng sản phẩm
window.onstorage = () => { showCart(); };


// -------------------------- CHO CHI TIET SAN PHAM ---------------------------

// const imgItem = document.querySelectorAll(".")
// let index = 0;
// let imgLength = imgItem.length;
// imgItem.forEach(function(image,index){
//     image.style.left = index*100 + "%"
// })








const bigImg = document.querySelector(".product-big-img img")
const smallImg = document.querySelectorAll(".product-small-img")
smallImg.forEach(function(imgItem, X){
    imgItem.addEventListener("click" , function(){
        bigImg.src = imgItem.src
    })
})



const thongtin = document.querySelector(".thong-tin")
const chitiet = document.querySelector(".chi-tiet")
if (thongtin) {
    thongtin.addEventListener("click", function () {
        document.querySelector(".product-content-material-description-store").style.display = "none"
        document.querySelector(".product-content-material-detail").style.display = "block"
    })
}
if (chitiet) {
    chitiet.addEventListener("click", function () {
        document.querySelector(".product-content-material-description-store").style.display = "block"
        document.querySelector(".product-content-material-detail").style.display = "none"
    })
}

const button = document.querySelector(".product-content-material");
if(button){
    button.addEventListener("click",function() {
        document.querySelector(".product-content-material-content").classList.toggle("active")
    })
}