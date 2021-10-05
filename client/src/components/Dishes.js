import {Link} from "react-router-dom"

function Dishes() {
    return (
        <section class="dishes" id="dishes">

    <h3 class="sub-heading"> our dishes </h3>
    <h1 class="heading"> popular dishes </h1>

    <div class="box-container">

        <div class="box">
            <Link href="#" class="fas fa-heart"></Link>
            <Link href="#" class="fas fa-eye"></Link>
            <img src="images/dish-1.png" alt=""/>
            <h3>tasty food</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <Link href="#" class="btn">add to cart</Link>
        </div>

        <div class="box">
            <Link href="#" class="fas fa-heart"></Link>
            <Link href="#" class="fas fa-eye"></Link>
            <img src="images/dish-2.png" alt=""/>
            <h3>tasty food</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <Link href="#" class="btn">add to cart</Link>
        </div>

        <div class="box">
            <Link href="#" class="fas fa-heart"></Link>
            <Link href="#" class="fas fa-eye"></Link>
            <img src="images/dish-3.png" alt=""/>
            <h3>tasty food</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <Link href="#" class="btn">add to cart</Link>
        </div>

        <div class="box">
            <Link href="#" class="fas fa-heart"></Link>
            <Link href="#" class="fas fa-eye"></Link>
            <img src="images/dish-4.png" alt=""/>
            <h3>tasty food</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <Link href="#" class="btn">add to cart</Link>
        </div>

        <div class="box">
            <Link href="#" class="fas fa-heart"></Link>
            <Link href="#" class="fas fa-eye"></Link>
            <img src="images/dish-5.png" alt=""/>
            <h3>tasty food</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <Link href="#" class="btn">add to cart</Link>
        </div>

        <div class="box">
            <Link href="#" class="fas fa-heart"></Link>
            <Link href="#" class="fas fa-eye"></Link>
            <img src="images/dish-6.png" alt=""/>
            <h3>tasty food</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <span>$15.99</span>
            <Link href="#" class="btn">add to cart</Link>
        </div>

    </div>

</section>
    )
}

export default Dishes
