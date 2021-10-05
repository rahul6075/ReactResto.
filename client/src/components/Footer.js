import {Link} from "react-router-dom";
function Footer() {
    return (
        <section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>locations</h3>
            <Link href="#">india</Link>
            <Link href="#">japan</Link>
            <Link href="#">russia</Link>
            <Link href="#">USA</Link>
            <Link href="#">france</Link>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <Link href="#">home</Link>
            <Link href="#">dishes</Link>
            <Link href="#">about</Link>
            <Link href="#">menu</Link>
            <Link href="#">reivew</Link>
           
        </div>

        <div class="box">
            <h3>contact info</h3>
            <Link href="#">+917860965109</Link>
            <Link href="#">+91 222 222 222</Link>
            <Link href="#">198rahulchuadhary@gmail.com</Link>
            <Link href="#">mernstriker@gmail.com</Link>
            <Link href="#">Haridwar, india -249404</Link>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <Link href="#"><i class="fab fa-facebook"></i> facebook</Link>
            <Link href="#"><i class="fab fa-twitter"></i> twitter</Link>
            <Link href="#"><i class="fab fa-instagram"></i> instagram</Link>
            <Link href="#"><i class="fab fa-linkedin"></i> linkedin</Link>
        </div>

    </div>

    <div class="credit"> copyright @ 2021 by <span><i class="fab fa-youtube"></i>MERN STRIKER</span> </div>

</section>
    )
}

export default Footer
