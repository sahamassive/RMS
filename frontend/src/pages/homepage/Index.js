import React from 'react';
import './assets/css/style.css';
import './assets/js/main';

function Index() {
  return(
    <div>

      <div id="topbar" class="d-flex align-items-center fixed-top">
        <div class="container d-flex justify-content-center justify-content-md-between">
    
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-phone d-flex align-items-center"><span>+1 5589 55488 55</span></i>
            <i class="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 23PM</span></i>
          </div>
        </div>
      </div>
    
      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
    
          <h3 class="logo me-auto me-lg-0"><a href="index.html"><img src="assets/img/logo/logo.png" alt=""></img>
          </a>
        <span style="color: red;font-style: italic;">Restaurent</span>
        <span style="color: rgb(255, 255, 0);">FOOD</span>
        </h3>
    
          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a class="nav-link scrollto" href="#about">About</a></li>
              <li><a class="nav-link scrollto" href="#menu">Menu</a></li>
              <li><a class="nav-link scrollto" href="#specials">Specials</a></li>
              <li><a class="nav-link scrollto" href="#events">Events</a></li>
              <li><a class="nav-link scrollto" href="#chefs">Chefs</a></li>
              <li><a class="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#book-a-table" class="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>
    
        </div>
      </header>
    
      <section id="hero" class="d-flex align-items-center">
        <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-8">
              <h1>Welcome to <span>Restaurant</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>
    
              <div class="btns">
                <a href="#menu" class="btn-menu animated fadeInUp scrollto">Our Menu</a>
                <a href="#book-a-table" class="btn-book animated fadeInUp scrollto">Book a Table</a>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
              <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" class="glightbox play-btn"></a>
            </div>
    
          </div>
        </div>
      </section>
    
      <main id="main">
    
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
    
            <div class="row">
              <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                <div class="about-img">
                  <img src="assets/img/about.jpg" alt=""></img>
                </div>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>We provide for the most worthy food and taste, as if the pleasures of the body and mind were to be assumed.</h3>
                <p class="fst-italic">
                  Our moto is to provide the best food possible to our customer. and also no compromise with quality, taste
                  and health.
                </p>
                <ul>
                  <li><i class="bi bi-check-circle"></i> Best Environment.</li>
                  <li><i class="bi bi-check-circle"></i>Best taste.</li>
                  <li><i class="bi bi-check-circle"></i> Best chef.</li>
                  <li><i class="bi bi-check-circle"></i> Best food.</li>
                </ul>
                <p>
                  Hungry? no problem. We are here to serve you. Morning breakfast, lunch, tea, coffee, evening items and dinner.
                  Also any kind of event like marriage anniversary, dinner party, barthday party nad many more.
                </p>
              </div>
            </div>
    
          </div>
        </section>
    
        <section id="why-us" class="why-us">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Why Us</h2>
              <p>Why Choose Our Restaurant</p>
            </div>
    
            <div class="row">
    
              <div class="col-lg-4">
                <div class="box" data-aos="zoom-in" data-aos-delay="100">
                  <span>01</span>
                  <h4>Best Environment</h4>
                  <p>Nice, calm, clean, excellent orientation and many more.</p>
                </div>
              </div>
    
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="200">
                  <span>02</span>
                  <h4>Best Quality Food</h4>
                  <p>No compromise in taste nad food quality. Better menus and world class chefs. </p>
                </div>
              </div>
    
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="300">
                  <span>03</span>
                  <h4> World Class Service</h4>
                  <p>Our staff is very user friendly. and attend each and every customer with care.</p>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
    
        <section id="menu" class="menu section-bg">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Menu</h2>
              <p>Check Our Tasty Menu</p>
            </div>
    
            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li data-filter="*" class="filter-active">All</li>
                  <li data-filter=".filter-starters">Starters</li>
                  <li data-filter=".filter-salads">Salads</li>
                  <li data-filter=".filter-specialty">Specialty</li>
                </ul>
              </div>
            </div>
    
            <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
    
              <div class="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/lobster-bisque.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Lobster Bisque</a><span>$5.95</span>
                </div>
                <div class="menu-ingredients">
                  All ingredients name.
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/bread-barrel.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Bread Barrel</a><span>$6.95</span>
                </div>
                <div class="menu-ingredients">
                  All ingredients name.
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/cake.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Crab Cake</a><span>$7.95</span>
                </div>
                <div class="menu-ingredients">
                  A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-salads">
                <img src="assets/img/menu/caesar.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Caesar Selections</a><span>$8.95</span>
                </div>
                <div class="menu-ingredients">
                  All ingredients name.
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/tuscan-grilled.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Tuscan Grilled</a><span>$9.95</span>
                </div>
                <div class="menu-ingredients">
                  All ingredients name.
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/mozzarella.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Mozzarella Stick</a><span>$4.95</span>
                </div>
                <div class="menu-ingredients">
                  All ingredients name.
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-salads">
                <img src="assets/img/menu/greek-salad.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Greek Salad</a><span>$9.95</span>
                </div>
                <div class="menu-ingredients">
                  All ingredients name.
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-salads">
                <img src="assets/img/menu/spinach-salad.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Spinach Salad</a><span>$9.95</span>
                </div>
                <div class="menu-ingredients">
                  Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                </div>
              </div>
    
              <div class="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/lobster-roll.jpg" class="menu-img" alt=""></img>
                <div class="menu-content">
                  <a href="#">Lobster Roll</a><span>$12.95</span>
                </div>
                <div class="menu-ingredients">
                  Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
    
        <section id="specials" class="specials">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Specials</h2>
              <p>Check Our Specials</p>
            </div>
    
            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cheese Burger</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Chicken fry</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Ckicken cheese pizza</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Hotdog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Special sandwitch</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>The best food is possible to get</h3>
                        <p class="fst-italic">Why do people love restaurants?
                          Restaurants are known to provide excellent social settings and you could enjoy a wonderful meal amidst friends, family, and great ambiance. </p>
                        <p>A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. The restaurant offers a menu with various options for your meal, to choose from.</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-1.png" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p class="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-2.png" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                        <p class="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                        <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-3.png" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                        <p class="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                        <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-4.png" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                        <p class="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                        <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-5.png" alt="" class="img-fluid"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
        </section>
    
        <section id="events" class="events">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Events</h2>
              <p>Organize Your Events in our Restaurant</p>
            </div>
    
            <div class="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div class="swiper-wrapper">
    
                <div class="swiper-slide">
                  <div class="row event-item">
                    <div class="col-lg-6">
                      <img src="assets/img/event-birthday.jpg" class="img-fluid" alt=""></img>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Birthday Parties</h3>
                      <div class="price">
                        <p><span>$189</span></p>
                      </div>
                      <p class="fst-italic">
                        Birthdays are the most special day of the year for children. It is a day full of celebrations where children enjoy many fun activities, party with their friends and family, receive a lot of gifts and of course.                  </p>
                      <ul>
                        <li><i class="bi bi-check-circled"></i> Talk about your birthday and the celebrations you have planned.</li>
                        <li><i class="bi bi-check-circled"></i> You just imagine, We will make it live.</li>
                        <li><i class="bi bi-check-circled"></i> Your birthday our responsibility.</li>
                      </ul>
                      <p>
                        These are all fun, and memorable moments, which children will remember for a long time. So, while writing an essay on this topic, they will indeed have a lot of ideas.
                      </p>
                    </div>
                  </div>
                </div>
    
                <div class="swiper-slide">
                  <div class="row event-item">
                    <div class="col-lg-6">
                      <img src="assets/img/event-private.jpg" class="img-fluid" alt=""></img>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Private Parties</h3>
                      <div class="price">
                        <p><span>$290</span></p>
                      </div>
                      <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
    
                <div class="swiper-slide">
                  <div class="row event-item">
                    <div class="col-lg-6">
                      <img src="assets/img/event-custom.jpg" class="img-fluid" alt=""></img>
                    </div>
                    <div class="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Custom Parties</h3>
                      <div class="price">
                        <p><span>$99</span></p>
                      </div>
                      <p class="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i class="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i class="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
    
              </div>
              <div class="swiper-pagination"></div>
            </div>
    
          </div>
        </section>
    
        <section id="book-a-table" class="book-a-table">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Reservation</h2>
              <p>Book a Table</p>
            </div>
    
            <form action="forms/book-a-table.php" method="post" role="form" class="php-email-form" data-aos="fade-up" data-aos-delay="100">
              <div class="row">
                <div class="col-lg-4 col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"></input>
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input type="text" class="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6 form-group mt-3">
                  <input type="text" name="date" class="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6 form-group mt-3">
                  <input type="text" class="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"></input>
                  <div class="validate"></div>
                </div>
                <div class="col-lg-4 col-md-6 form-group mt-3">
                  <input type="number" class="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"></input>
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Book a Table</button></div>
            </form>
    
          </div>
        </section>
    
        <section id="testimonials" class="testimonials section-bg">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Testimonials</h2>
              <p>What they're saying about us</p>
            </div>
    
            <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div class="swiper-wrapper">
    
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      One of the best mutton kacchi on the town.
                      You couldn't deny their test if you are eleganter people.
                      
                      There mutton is very soft & spicy. The KACCHI is from Bashmati rice which is boiled well. I love their BORHANI most. It was perfect tasted.
                      
                      The atmosphere was cool & very Gentle. You could spend your quality time with your special one here.                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""></img>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
    
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      I think the quantity was rice was usual and more than enough for one person. We were 7 and we took 3platters which were sufficient for us.❣️                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt=""></img>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
    
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Thanks to our local colleagues who brought us to this place. Authentic Bangladeshi cuisine. I am not fan of mutton but this one was made to perfection. Taste was good, meat was tender. The drink in yellow green colour is popular. A touch of saltiness and spiciness and sweet…. New experience 😀. Only cash payment.                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt=""></img>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
    
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt=""></img>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
    
                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt=""></img>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
    
              </div>
              <div class="swiper-pagination"></div>
            </div>
    
          </div>
        </section>
    
        <section id="gallery" class="gallery">
    
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Gallery</h2>
              <p>Some photos from Our Restaurant</p>
            </div>
          </div>
    
          <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">
    
            <div class="row g-0">
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-1.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-1.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-2.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-2.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-3.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-3.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-4.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-4.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-5.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-5.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-6.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-6.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-7.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-7.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
              <div class="col-lg-3 col-md-4">
                <div class="gallery-item">
                  <a href="assets/img/gallery/gallery-8.jpg" class="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-8.jpg" alt="" class="img-fluid"></img>
                  </a>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
    
        <section id="chefs" class="chefs">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Chefs</h2>
              <p>Our Proffesional Chefs</p>
            </div>
    
            <div class="row">
    
              <div class="col-lg-4 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <img src="assets/img/chefs/chefs-1.jpg" class="img-fluid" alt=""></img>
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Walter White</h4>
                      <span>Master Chef</span>
                    </div>
                    <div class="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="200">
                  <img src="assets/img/chefs/chefs-2.jpg" class="img-fluid" alt=""></img>
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Patissier</span>
                    </div>
                    <div class="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div class="col-lg-4 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="300">
                  <img src="assets/img/chefs/chefs-3.jpg" class="img-fluid" alt=""></img>
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>William Anderson</h4>
                      <span>Cook</span>
                    </div>
                    <div class="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
        </section>
    
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
    
            <div class="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
          </div>
    
          <div data-aos="fade-up">
            <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
          </div>
    
          <div class="container" data-aos="fade-up">
    
            <div class="row mt-5">
    
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
    
                  <div class="open-hours">
                    <i class="bi bi-clock"></i>
                    <h4>Open Hours:</h4>
                    <p>
                      Monday-Saturday:<br></br>
                      11:00 AM - 2300 PM
                    </p>
                  </div>
    
                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>
    
                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
    
                </div>
    
              </div>
    
              <div class="col-lg-8 mt-5 mt-lg-0">
    
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required></input>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required></input>
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required></input>
                  </div>
                  <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="8" placeholder="Message" required></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
    
              </div>
    
            </div>
    
          </div>
        </section>
    
      </main>
    
     </div>
  );
}

export default Index;