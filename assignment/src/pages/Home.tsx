import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <div>
        <div className="show">
          <div className="container">
            <div className="show-content">
              <h6>Xu hướng mới</h6>
              <h1>Wellcome to Reystore</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>
              <a href="Products-category.html" className="btn">Shop now</a>
            </div>
            <div className="show-product">
              <div className="row">
                <div className="col-4">
                  <div className="pro-box">
                    <a href="#">
                      <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879836/2_fkpcco.jpg" />
                    </a>
                    <div className="pro-box-content">
                      <h6>Man</h6>
                      <h4><a href="#">A new dimension of knitwear.</a></h4>
                      <a href="#" className="btn btn-sm">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="pro-box">
                    <a>
                      <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879837/3_kqi64b.jpg" />
                    </a>
                    <div className="pro-box-content">
                      <h6>Woman</h6>
                      <h4><a href="#">A new dimension of knitwear.</a></h4>
                      <a href="#" className="btn btn-sm">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="pro-box">
                    <a href="#">
                      <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879837/4_r4zcsu.jpg" />
                    </a>
                    <div className="pro-box-content">
                      <h6>Kid</h6>
                      <h4><a>A new dimension of knitwear.</a></h4>
                      <a href="#" className="btn btn-sm">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*CATE*/}
        <div className="cate">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="cate-box">
                  <a href="#">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879978/7._m9juzr.png" />
                    <h4>Pants</h4>
                  </a>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="cate-box">
                      <a href="#">
                        <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879979/8_tsbmuf.png" />
                        <h4>Jeans</h4>
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="cate-box">
                      <a href="#">
                        <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879978/9_lrwxog.png" />
                        <h4>tshirts</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="cate-box">
                  <a href="Products.html">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648879979/10_aiottn.png" />
                    <h4>jacket</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*NEW*/}
        <div className="new">
          <div className="container">
            <h2> New Arrival</h2>
            <div className="row">
              <div className="col-3">
                <div className="pro-item">
                  <div className="pro-thumb">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/c_ilqoh4.png" />
                    <a href="#" className="btn btn-sm"> add to cart</a>
                  </div>
                  <span className="small">New</span>
                  <h4 className="pro-item-name">
                    <a href="/products/:id">Blue Bleach Wash Denim Western Short</a>
                  </h4>
                  <div className="pro-item-price">$20.00</div>
                </div>
              </div>
              <div className="col-3">
                <div className="pro-item">
                  <div className="pro-thumb">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/c_ilqoh4.png" />
                    <a href="/products/:id" className="btn btn-sm"> add to cart</a>
                  </div>
                  <span className="small">New</span>
                  <h4 className="pro-item-name">
                    <a href="#">Blue Bleach Wash Denim Western Short</a>
                  </h4>
                  <div className="pro-item-price">$20.00</div>
                </div>
              </div>
              <div className="col-3">
                <div className="pro-item">
                  <div className="pro-thumb">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/d_whhstb.png" />
                    <a href="/products/:id" className="btn btn-sm"> add to cart</a>
                  </div>
                  <span className="small">New</span>
                  <h4 className="pro-item-name">
                    <a href="/products/:id">Blue Bleach Wash Denim Western Short</a>
                  </h4>
                  <div className="pro-item-price">$20.00</div>
                </div>
              </div>
              <div className="col-3">
                <div className="pro-item">
                  <div className="pro-thumb">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880073/b_biw78n.png" />
                    <a href="/products/:id" className="btn btn-sm"> add to cart</a>
                  </div>
                  <span className="small">New</span>
                  <h4 className="pro-item-name">
                    <a href="/products/:id">Blue Bleach Wash Denim Western Short</a>
                  </h4>
                  <div className="pro-item-price">$20.00</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a href="/products" className="btn btn-dark"> View more</a>
            </div>
          </div>
        </div>
        {/*FEATURE*/}
        <div className="feature">
          <div className="feature-left" />
          <div className=" feature-right">
            <h2>black in black</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At cursus justo ac, nisl, vitae. Elementum enim accumsan facilisis diam libero. Mattis tortor eget sollicitudin sollicitudin tempor volutpat. Quis vitae arcu, est convallis velit amet urna, lobortis sed. Blandit aliquet odio venenatis arcu ornare egestas magna proin. Amet amet, a enim mi neque. Volutpat lacus praesent elementum scelerisque aliquet. </p>
            <a href="#" className="btn">Shop now</a>
          </div>
        </div>
        {/*COLLECTION*/}
        <div className="collection">
          <div className="container">
            <div className="collection-box">
              <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880326/backgroud_k14190.png" />
              <div className="collection-box-content">
                <h6>own the day</h6>
                <h2>SPRING COLLECTION</h2>
                <a href="#" className="btn">Shop now</a>
              </div>
            </div>
          </div>
        </div>
        {/*BLOG*/}
        <div className="blog">
          <div className="container">
            <h2>REY JOURNAL</h2>
            <div className="row">
              <div className="col-4">
                <div className="blog-item">
                  <a href="#" className="blog-thumb">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880404/i_vq8vir.png" />
                    <div className="blog-thumb-content">
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                    </div>
                  </a>
                  <span className="small">by admin, december 17,2020</span>
                  <h4>
                    <a href="#">Les Benjamins &amp; PUMA Link Up for Carpet Influenced SS20 Drop</a>
                  </h4>
                </div>
              </div>
              <div className="col-4">
                <div className="blog-item">
                  <a href="#" className="blog-thumb">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880404/h_lfyqoz.png" />
                    <div className="blog-thumb-content">
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                    </div>
                  </a>
                  <span className="small">by admin, december 17,2020</span>
                  <h4>
                    <a href="#">Les Benjamins &amp; PUMA Link Up for Carpet Influenced SS20 Drop</a>
                  </h4>
                </div>
              </div>
              <div className="col-4">
                <div className="blog-item">
                  <a href="#" className="blog-thumb">
                    <img src="https://res.cloudinary.com/dd0io3fh2/image/upload/v1648880404/h_lfyqoz.png" />
                    <div className="blog-thumb-content">
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                      Les Benjamins &amp; PUMA Link Up for Carpet Influenced
                    </div>
                  </a>
                  <span className="small">by admin, december 17,2020</span>
                  <h4>
                    <a href="#">Les Benjamins &amp; PUMA Link Up for Carpet Influenced SS20 Drop</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*getoff*/}
        <div className="getoff text-center"> {/*text center dc sd chung cawn giua*/}
          <div className="conteiner">
            <h2>GET 10% OFF</h2>
            <p>Get 10% off your first purchase by joining our mailing list,<br />
              and receive some of the best deals possible.</p>
            <p>
              <input type="text" placeholder="Email" className="form-control" />
              <button> <a href="#">join now</a></button>
            </p>
            <p>Your personal data will only be used for the purpose of providing you with the newsletter service.<br /> You can at any time from the newsletter service which you have subscribed. </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home