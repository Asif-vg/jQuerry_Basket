let favorite = document.querySelectorAll("#products .icons .fa-heart");


for (let i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener("click", function(e) {
        e.preventDefault();

        let id = this.closest(".card").id;
        let oldFavorites = localStorage.getItem("favorites");
        let newFavorite;

        if (oldFavorites == null) {
            newFavorite = id;
            this.style.color = "red";
        } else {
            let arr = oldFavorites.split(",");
            if (arr.find(item => item == id) == undefined) {
                newFavorite = oldFavorites + "," + id;
                this.style.color = "red";
            } else {
                let newArr = arr.filter(item => item != id);
                newFavorite = newArr.join(",");
                this.style.color = "black";
            }
        }

        localStorage.setItem("favorites", newFavorite);
        document.querySelector(".cart-favorite").textContent = localStorage.getItem("favorites").split(",").length;
    });
}

let oldFavorites = localStorage.getItem("favorites");
if (oldFavorites != null) {
    let idsArr = localStorage.getItem("favorites").split(",");
    let cards = document.querySelectorAll(".card");
    document.querySelector(".cart-favorite").textContent = idsArr.length;

    for (let i = 0; i < cards.length; i++) {
        if (idsArr.some(item => item == cards[i].id)) {
            cards[i].children[2].firstElementChild.style.color = "red";
        }
    }
}

$(document).ready(function() {
    let cart = $("#products .icons .fa-shopping-cart");
    for (let i = 0; i < cart.length; i++) {
        $(cart[i]).click(function(e) {
            e.preventDefault();

            let idd = $(this)[0].closest(".card").id;
            let oldCarts = localStorage.getItem("carts");
            let newCart;
            if (oldCarts == null) {
                newCart = idd;
                this.style.color = "red";
            } else {
                let array = oldCarts.split(",");
                if (array.find(items => items == idd) == undefined) {
                    newCart = oldCarts + "," + idd;
                    this.style.color = "red";
                } else {
                    let newArray = array.filter(item => item != idd);
                    newCart = newArray.join(",");
                    this.style.color = "black";
                }
            }
            localStorage.setItem("carts", newCart);
            $(".cart-basket").text(localStorage.getItem("carts").split(",").length);
        })

    }
    let oldCarts = localStorage.getItem("carts");
    if (oldCarts != null) {
        let idsArray = localStorage.getItem("carts").split(",");
        let cardss = $(".card");
        $(".cart-basket").text(idsArray.length);

        for (let i = 0; i < cardss.length; i++) {
            if (idsArray.some(items => items == cardss[i].id)) {
                cardss[i].children[2].lastElementChild.style.color = "red";
            }
        }
    }

});