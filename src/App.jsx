import Lakecarousel from "../components/Lakecarousel";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="main-nav">
          <div className="in-nav">
            <div>
              <a href="#">Become a Seller</a>
            </div>

            <div>
              <a href="#">Source Points</a>
            </div>

            <hr />
            <br />
            <div id="nav-appliances">
              <a href="#">Appliances</a>
            </div>

            <div id="nav-computing">
              <a href="#">Computing</a>
            </div>

            <div id="nav-electronics">
              <a href="#">Electronics</a>
            </div>

            <div id="nav-gaming">
              <a href="#">Gaming</a>
            </div>

            <div id="nav-phones">
              <a href="#">Phones &#38; Tablets</a>
            </div>

            <div id="nav-smart-tech">
              <a href="#">Smart Technology</a>
            </div>

            <div id="nav-apps">
              <a href="#">Software &#38; Apps</a>
            </div>

            <div id="nav-wearables">
              <a href="#">Wearables</a>
            </div>
          </div>

          <Lakecarousel />

          <div className="options">
            <ul>
              <li>
                <a href="#">Best Deals</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Become a Seller</a>
              </li>
              <li>
                <a href="#">Payment Options</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Middle Section */}
      <article>
        {/* Jumia's Side */}

        <div className="jumia-n-all">
          <div className="laketek-prods">
            <div>LakeTek Products</div>
            <div className="cards">
              <div>
                <div>
                  <img src="\jumiaimg\laketek\best-deals.png" alt="" />
                </div>
                <div>
                  <h2>Lake Technologies Best</h2>
                </div>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\laketek\healthcare.png" alt="" />
                </div>
                <div>
                  <h2>Healthcare</h2>
                </div>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\laketek\travel.png" alt="" />
                </div>
                <div>
                  <h2>Travel</h2>
                </div>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\laketek\finance.png" alt="" />
                </div>
                <div>
                  <h2>Finance</h2>
                </div>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\laketek\books.png" alt="" />
                </div>
                <div>
                  <h2>Books</h2>
                </div>
              </div>

              <div>
                <div>
                  <img
                    src="\jumiaimg\laketek\programming-services.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2>Programming Services</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="best-deals">
            <div>Our Best Deals</div>
            <div className="cards">
              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (1).jpg" alt="" />
                </div>
                <h3>
                  XIAOMI Redmi 13, 6.79" 8Gb RAM / 128GB ROM (Redmi8+128) -
                  Black
                </h3>
                <h4>₦ 210,600</h4>
                <p>₦ 400,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (2).jpg" alt="" />
                </div>
                <h3>itel 32 Inches LED TV (A3250) + 1 year Warranty</h3>
                <h4>₦ 84,150</h4>
                <p>₦ 94,150</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (3).jpg" alt="" />
                </div>
                <h3>Nexus 4 Burner (4 + 0) Gas Cooker (GCCR-NX-5055B)</h3>
                <h4>₦ 122,990</h4>
                <p>₦ 131,435</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (4).jpg" alt="" />
                </div>
                <h3>
                  itel PowerLite 20000mAh 15W Fast Charger Type C Mobile Power
                </h3>
                <h4>₦ 13,500</h4>
                <p>₦ 28,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (5).jpg" alt="" />
                </div>
                <h3>ADIDAS Galaxy 6 Shoes Men</h3>
                <h4>₦ 33,076</h4>
                <p>₦ 101,771</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>
                  4 Pcs Women Bags Handbags Purse Ladies Bags Shoulder Bags
                </h3>
                <h4>₦ 6,281</h4>
                <p>₦ 13,736</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>ADIDAS Streetcheck Cloudfoam Court Low Shoes Men</h3>
                <h4>₦ 46,322 - ₦ 65,920</h4>
                <p>₦ 142,530</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (7).jpg" alt="" />
                </div>
                <h3>Oraimo TWS True Wireless Bluetooth Earphones</h3>
                <h4>₦ 12,999</h4>
                <p>₦ 25,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (8).jpg" alt="" />
                </div>
                <h3>Royal 43 Inches LED TV (RTV43F7J) + 1 Year Warranty</h3>
                <h4>₦ 177,133</h4>
                <p>₦ 187,133</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (9).jpg" alt="" />
                </div>
                <h3>Senwei 1.8kva Ecology Generator (Eco2020s)</h3>
                <h4>₦ 164,340</h4>
                <p>₦ 1,150,990</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (10).jpg" alt="" />
                </div>
                <h3>
                  XIAOMI Redmi A3x 6.71" 3GB RAM/64GB ROM Android 14 - Green
                </h3>
                <h4>₦ 99,900</h4>
                <p>₦ 120,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (11).jpg" alt="" />
                </div>
                <h3>
                  ECOFLOW Portable Power Station DELTA 2, With Expandable
                  Capacity,Fast Charging, Home Backup Power, Camping
                </h3>
                <h4>₦ 717,249</h4>
                <p>₦ 1,199,999</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1.jpg" alt="" />
                </div>
                <h3>Zaron Vitamin C Brightening/Moisturizing Body Lotion</h3>
                <h4>₦ 13,990</h4>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\12.jpg" alt="" />
                </div>
                <h3>
                  XIAOMI Redmi 13C 6.74'' 8GB RAM/256GB ROM Android 12-Midnight
                  Black
                </h3>
                <h4>₦ 151,000</h4>
                <p>₦ 175,000</p>
              </div>
            </div>
          </div>

          <div className="recent-search">
            <div>Your Recent Search</div>
            <div className="cards">
              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (1).jpg" alt="" />
                </div>
                <h3>
                  XIAOMI Redmi 13, 6.79" 8Gb RAM / 128GB ROM (Redmi8+128) -
                  Black
                </h3>
                <h4>₦ 210,600</h4>
                <p>₦ 400,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (2).jpg" alt="" />
                </div>
                <h3>itel 32 Inches LED TV (A3250) + 1 year Warranty</h3>
                <h4>₦ 84,150</h4>
                <p>₦ 94,150</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (3).jpg" alt="" />
                </div>
                <h3>Nexus 4 Burner (4 + 0) Gas Cooker (GCCR-NX-5055B)</h3>
                <h4>₦ 122,990</h4>
                <p>₦ 131,435</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (4).jpg" alt="" />
                </div>
                <h3>
                  itel PowerLite 20000mAh 15W Fast Charger Type C Mobile Power
                </h3>
                <h4>₦ 13,500</h4>
                <p>₦ 28,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (5).jpg" alt="" />
                </div>
                <h3>ADIDAS Galaxy 6 Shoes Men</h3>
                <h4>₦ 33,076</h4>
                <p>₦ 101,771</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>
                  4 Pcs Women Bags Handbags Purse Ladies Bags Shoulder Bags
                </h3>
                <h4>₦ 6,281</h4>
                <p>₦ 13,736</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>ADIDAS Streetcheck Cloudfoam Court Low Shoes Men</h3>
                <h4>₦ 46,322 - ₦ 65,920</h4>
                <p>₦ 142,530</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (7).jpg" alt="" />
                </div>
                <h3>Oraimo TWS True Wireless Bluetooth Earphones</h3>
                <h4>₦ 12,999</h4>
                <p>₦ 25,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (8).jpg" alt="" />
                </div>
                <h3>Royal 43 Inches LED TV (RTV43F7J) + 1 Year Warranty</h3>
                <h4>₦ 177,133</h4>
                <p>₦ 187,133</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (9).jpg" alt="" />
                </div>
                <h3>Senwei 1.8kva Ecology Generator (Eco2020s)</h3>
                <h4>₦ 164,340</h4>
                <p>₦ 1,150,990</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (10).jpg" alt="" />
                </div>
                <h3>
                  XIAOMI Redmi A3x 6.71" 3GB RAM/64GB ROM Android 14 - Green
                </h3>
                <h4>₦ 99,900</h4>
                <p>₦ 120,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (11).jpg" alt="" />
                </div>
                <h3>
                  ECOFLOW Portable Power Station DELTA 2, With Expandable
                  Capacity,Fast Charging, Home Backup Power, Camping
                </h3>
                <h4>₦ 717,249</h4>
                <p>₦ 1,199,999</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1.jpg" alt="" />
                </div>
                <h3>Zaron Vitamin C Brightening/Moisturizing Body Lotion</h3>
                <h4>₦ 13,990</h4>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\12.jpg" alt="" />
                </div>
                <h3>
                  XIAOMI Redmi 13C 6.74'' 8GB RAM/256GB ROM Android 12-Midnight
                  Black
                </h3>
                <h4>₦ 151,000</h4>
                <p>₦ 175,000</p>
              </div>
            </div>
          </div>

          <div className="half-price">
            <div>Half Price Store</div>
            <div className="cards">
              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (2).jpg" alt="" />
                </div>
                <h3>itel 32 Inches LED TV (A3250) + 1 year Warranty</h3>
                <h4>₦ 84,150</h4>
                <p>₦ 94,150</p>
              </div>
              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (2).jpg" alt="" />
                </div>
                <h3>itel 32 Inches LED TV (A3250) + 1 year Warranty</h3>
                <h4>₦ 84,150</h4>
                <p>₦ 94,150</p>
              </div>
              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (2).jpg" alt="" />
                </div>
                <h3>itel 32 Inches LED TV (A3250) + 1 year Warranty</h3>
                <h4>₦ 84,150</h4>
                <p>₦ 94,150</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (3).jpg" alt="" />
                </div>
                <h3>Nexus 4 Burner (4 + 0) Gas Cooker (GCCR-NX-5055B)</h3>
                <h4>₦ 122,990</h4>
                <p>₦ 131,435</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (4).jpg" alt="" />
                </div>
                <h3>
                  itel PowerLite 20000mAh 15W Fast Charger Type C Mobile Power
                </h3>
                <h4>₦ 13,500</h4>
                <p>₦ 28,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (5).jpg" alt="" />
                </div>
                <h3>ADIDAS Galaxy 6 Shoes Men</h3>
                <h4>₦ 33,076</h4>
                <p>₦ 101,771</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>
                  4 Pcs Women Bags Handbags Purse Ladies Bags Shoulder Bags
                </h3>
                <h4>₦ 6,281</h4>
                <p>₦ 13,736</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>ADIDAS Streetcheck Cloudfoam Court Low Shoes Men</h3>
                <h4>₦ 46,322 - ₦ 65,920</h4>
                <p>₦ 142,530</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (7).jpg" alt="" />
                </div>
                <h3>Oraimo TWS True Wireless Bluetooth Earphones</h3>
                <h4>₦ 12,999</h4>
                <p>₦ 25,000</p>
              </div>
            </div>
          </div>

          <div className="hand-picked">
            <div>Handpicked For You</div>
            <div className="cards">
              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (4).jpg" alt="" />
                </div>
                <h3>
                  itel PowerLite 20000mAh 15W Fast Charger Type C Mobile Power
                </h3>
                <h4>₦ 13,500</h4>
                <p>₦ 28,000</p>
              </div>
              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (4).jpg" alt="" />
                </div>
                <h3>
                  itel PowerLite 20000mAh 15W Fast Charger Type C Mobile Power
                </h3>
                <h4>₦ 13,500</h4>
                <p>₦ 28,000</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (5).jpg" alt="" />
                </div>
                <h3>ADIDAS Galaxy 6 Shoes Men</h3>
                <h4>₦ 33,076</h4>
                <p>₦ 101,771</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>
                  4 Pcs Women Bags Handbags Purse Ladies Bags Shoulder Bags
                </h3>
                <h4>₦ 6,281</h4>
                <p>₦ 13,736</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (6).jpg" alt="" />
                </div>
                <h3>ADIDAS Streetcheck Cloudfoam Court Low Shoes Men</h3>
                <h4>₦ 46,322 - ₦ 65,920</h4>
                <p>₦ 142,530</p>
              </div>

              <div>
                <div>
                  <img src="\jumiaimg\otherdealsimg\1 (7).jpg" alt="" />
                </div>
                <h3>Oraimo TWS True Wireless Bluetooth Earphones</h3>
                <h4>₦ 12,999</h4>
                <p>₦ 25,000</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="#">Go To Top</a>
        </div>
      </article>

      {/* Footer */}
      <footer>
        <div className="new-customer">
          <div className="both">
            <a href="#">
              <p className="laketek">LakeTek Trove</p>

              <img
                src="\jumiaimg\laketek\lt.png"
                alt="LakeTek"
                className="pic"
              />
            </a>
          </div>
          <div className="other-both">
            <div two-ps>
              <p style={{ paddingBottom: 15 }}>New Customer?</p>
              <p style={{ paddingBottom: 15 }}>
                Subscribe to stay updated on our latest discounts!
              </p>
            </div>

            <div className="not-both">
              <input type="email" placeholder="Enter E-mail Address" />
              <input className="button" type="button" value="Male" />
              <input className="button" type="button" value="Female" />
              <p style={{ paddingTop: 35 }}>
                You can unsubscribe from newsletters at any time.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-list">
          <div className="bout-laketek">
            <p>
              Don't let outdated technology hold you back. Our unbeatable prices
              and jaw-dropping discounts open up a world of possibilities to
              you.
              <br /> Delaying could mean missing out on the chance to improve
              your daily life. Explore LakeTek Trove now and enjoy a world full
              of the best deals!
            </p>
          </div>

          <div className="f-l-1">
            <div>
              <h2>Payment Methods</h2>
              <ul>
                <li>
                  <a href="#">Shop with Source Points</a>
                </li>
                <li>
                  <a href="#">Payment on delivery logo</a>
                </li>
                <li>
                  <a href="#">Credit Card Payment</a>
                </li>
                <li>
                  <a href="#">Debit Card Payment</a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Need Help?</h2>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Shipping Rates</a>
                </li>
                <li>
                  <a href="#">Using Source Points</a>
                </li>
                <li>
                  <a href="#">Your account</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="f-l-2">
            <div>
              <h2>Knowing Lake Technologies</h2>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Payment Guidelines</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div>
              <h2>Make Money With LakeSource</h2>
              <ul>
                <li>
                  <a href="#">Sell Products On LakeSource</a>
                </li>
                <li>
                  <a href="#">E-book Sales</a>
                </li>
                <li>
                  <a href="#">Become an Affiliate</a>
                </li>
                <li>
                  <a href="#">Advertise Your Products</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="f-l-3">
            <h2>Follow Us On</h2>
            <ul>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="copyright">
          <p>
            <a href="#">Privacy Notice</a>
          </p>
          <p> Copyright &#169; 2024 LakeTek Trove. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default App;
