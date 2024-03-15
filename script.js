
function change(){
    var element = document.getElementById("section-second");
    var width = window.innerWidth;
    var btn = document.getElementById("buttons");
    if(width < 1240){
        element.innerHTML = '<h1 class="hr-line">&nbsp;&nbsp;Explore the Coffee World&nbsp;&nbsp;</h1><div class="container1"><div class="swiper"><div class="swiper-wrapper"><div class="swiper-slide"><div class="container"><div class="wrapper"><div class="banner-image banner"></div><h1>Cappacino</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,recusandae?</p><div class="price"><div class="amount">$8.60</div><button>Buy Now</button></div></div></div></div><div class="swiper-slide"><div class="container"><div class="wrapper"><div class="banner-image2 banner"></div><h1>Latte</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,recusandae?</p><div class="price"><div class="amount">$11.40</div><button>Buy Now</button></div></div></div></div><div class="swiper-slide"><div class="container"><div class="wrapper"><div class="banner-image3 banner"></div><h1>Mocha</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,recusandae?</p><div class="price"><div class="amount">$9.20</div><button>Buy Now</button></div></div></div></div><div class="swiper-slide"><div class="container"><div class="wrapper"><div class="banner-image4 banner"></div><h1>Cold Java</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,recusandae?</p><div class="price"><div class="amount">$6.40</div><button>Buy Now</button></div></div></div></div></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>';
    }
    else{
        element.innerHTML = '<h1 class="hr-line">&nbsp;&nbsp;Explore the Coffee World&nbsp;&nbsp;</h1> <div class="main"> <div class="container"> <div class="wrapper"> <div class="banner-image banner"></div> <h1>Cappacino</h1> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae? </p> <div class="price"> <div class="amount">$8.60</div> <button>Buy Now</button> </div> </div> </div> <div class="container"> <div class="wrapper"> <div class="banner-image2 banner"></div> <h1>Latte</h1> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae? </p> <div class="price"> <div class="amount">$11.40</div> <button>Buy Now</button> </div> </div> </div> <div class="container"> <div class="wrapper"> <div class="banner-image3 banner"></div> <h1>Mocha</h1> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae? </p> <div class="price"> <div class="amount">$9.20</div> <button>Buy Now</button> </div> </div> </div> <div class="container"> <div class="wrapper"> <div class="banner-image4 banner"></div> <h1>Cold Java</h1> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae? </p> <div class="price"> <div class="amount">$6.40</div> <button>Buy Now</button> </div> </div> </div> </div>';
    }
    var navb = document.getElementById("navb");
    if(width > 1040){
        navb.innerHTML = '<ul> <li><a href="index.html">Home</a></li> <li><a href="explore.html">Explore Us</a></li> <li><a href="#brands">Brands</a></li> <li><a href="contact.html">Contact us</a></li> </ul>';
    }
    else{
        navb.innerHTML = '<ul> <li><a href="explore.html">Explore Us</a></li> <li><a href="contact.html">Contact us</a></li> </ul>';
    }
    if(width > 1300){
        btn.innerHTML = '<a href=""><button>Sign-up/Log-in</button></a>&nbsp;<a href=""><button>Get the app</button></a>';
    }
    else{
        btn.innerHTML = '';
    }
    

    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
    
        // If we need pagination
         pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        });
    
}
window.addEventListener('resize',change);
