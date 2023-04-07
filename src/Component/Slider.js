import React from 'react'

function Slider() {
  return (
    <>
      <div className="mycontainer" id="mycon-index">
        <div className="main">
          <div className="main-head">Trending</div>
          <div className="main-crousel">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2500">
                  <div className="carousel-card">
                    <div className="carousel-news-img">
                      <img src="images/news-img1.png" alt="" />
                    </div>
                    <div className="carousel-main">

                      <h3>Learn searching algorithms in DSA</h3>
                      <p>Search refers to locating a desired element of specified properties in a collection of items. We
                        are going to start our discussion using following commonly used and simple search algorithms. ...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                  <div className="carousel-card">
                    <div className="carousel-news-img">
                      <img src="images/news-img2.png" alt="" />
                    </div>
                    <div className="carousel-main">

                      <h3>Learn the implementation of stacks </h3>
                      <p>Stack is a linear data structure that follows a particular order in which the operations are
                        performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
                        ...</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                  <div className="carousel-card">
                    <div className="carousel-news-img">
                      <img src="images/news-img3.png" alt="" />
                    </div>
                    <div className="carousel-main">

                      <h3>Learn the implementation of queue</h3>
                      <p>Queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at
                        both its ends.
                        ...</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                  <div className="carousel-card">
                    <div className="carousel-news-img">
                      <img src="images/news-img4.png" alt="" />
                    </div>
                    <div className="carousel-main">

                      <h3>What is Binary Tree in DSA ?</h3>
                      <p>The Binary tree means that the node can have maximum two children. Here, binary name itself
                        suggests that 'two'; therefore, ...</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                  <div className="carousel-card">
                    <div className="carousel-news-img">
                      <img src="images/news-img5.png" alt="" />
                    </div>
                    <div className="carousel-main">

                      <h3>Different Sorting Algorithms in DSA</h3>
                      <p>A Sorting Algorithm is used to rearrange a given array or list of elements according to a
                        comparison operator on the elements. The comparison operator is used to decide the new order of
                        elements in the respective data structure. ...</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                data-bs-slide="next" />
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider