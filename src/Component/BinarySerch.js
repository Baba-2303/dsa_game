import React,{useEffect} from 'react';


function BinarySerch() {
    useEffect(() => {
        window.scrollTo(0, 0);
        
      }, [])
    
    // const[spancolor,setSpanColor] = useState('#fedad4');
    
    let chances = 5;
    let randNum = Math.floor(Math.random() * 60) + 1;
    const handleClic = (clickNum) =>{
        
        console.log("span clicked",chances)
        if(chances>0){
            if(clickNum > randNum){
                console.log("greater");
                document.getElementsByClassName('box')[clickNum-1].style.backgroundColor ="red";
                document.getElementsByClassName('chances')[5-chances].style.backgroundColor ="red";
                document.getElementsByClassName('box')[clickNum-1].innerHTML = "Big";
        
            }
            else if(clickNum < randNum){
                console.log("less");
                document.getElementsByClassName('box')[clickNum-1].style.backgroundColor ="red";
                document.getElementsByClassName('chances')[5-chances].style.backgroundColor ="red";
                document.getElementsByClassName('box')[clickNum-1].innerHTML = 'Small';
            }
            else{
                console.log("found it");
                document.getElementsByClassName('box')[clickNum-1].style.backgroundColor ="green";
                document.getElementsByClassName('chances')[5-chances].style.backgroundColor ="green";
                document.getElementsByClassName('box')[clickNum-1].innerHTML = 'YOU  WIN!';
                document.getElementById('display').innerHTML = `CONGRATULATIONS!! The Number was ${randNum}`;
                chances = chances + 1;
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        }
        
        chances = chances - 1;
        if(chances === 0){
            console.log('you lose')
            document.getElementsByClassName('box')[clickNum-1].innerHTML = 'YOU  LOSE!';
            document.getElementById('display').innerHTML = `TRY AGAIN! The Number was ${randNum}`;
            setTimeout(() => {
                window.location.reload();
            }, 3000);

        }
    }



    return (
        <div>
            <div className="bs-container">
                <div className="bs-main">
                    <div className="bs-theory">
                        <h1 className="bs-theory-head">Binary Search</h1>
                        <p className="bs-theory-para">
                            <b>In this tutorial, you will learn how Binary Search sort works. Also, you will find working examples of
                                Binary
                                Search in C, C++, Java and Python.</b>
                        </p>
                        <p className="bs-theory-para">Binary Search is a searching algorithm for finding an element's position in a sorted
                            array.</p>
                        <p className="bs-theory-para">In this approach, the element is always searched in the middle of a portion of an
                            array.
                        </p>
                        <p className="bs-theory-para bs-note">
                            Binary search can be implemented only on a sorted list of items. If the elements are not sorted already, we
                            need
                            to sort them first.
                        </p>
                    </div>
                    <div className="box-container">
                        <div className="bs-con">
                            <h1 className="bs-head"><p id="display"> Search number : <span id="num"><b>X</b></span></p></h1>
                            <div className="bs-con1">
                                <p><b> Chances : </b></p>
                                <span className="chances"></span>
                                <span className="chances"></span>
                                <span className="chances"></span>
                                <span className="chances"></span>
                                <span className="chances"></span>
                            </div>
                        </div>
                        <div className="binarysearch">
                            <span className="box" onClick={()=>handleClic(1)}>1</span>
                            <span className="box" onClick={()=>handleClic(2)}>2</span>
                            <span className="box" onClick={()=>handleClic(3)}>3</span>
                            <span className="box" onClick={()=>handleClic(4)}>4</span>
                            <span className="box" onClick={()=>handleClic(5)}>5</span>
                            <span className="box" onClick={()=>handleClic(6)}>6</span>
                            <span className="box" onClick={()=>handleClic(7)}>7</span>
                            <span className="box" onClick={()=>handleClic(8)}>8</span>
                            <span className="box" onClick={()=>handleClic(9)}>9</span>
                            <span className="box" onClick={()=>handleClic(10)}>10</span>
                            <span className="box" onClick={()=>handleClic(11)}>11</span>
                            <span className="box" onClick={()=>handleClic(12)}>12</span>
                            <span className="box" onClick={()=>handleClic(13)}>13</span>
                            <span className="box" onClick={()=>handleClic(14)}>14</span>
                            <span className="box" onClick={()=>handleClic(15)}>15</span>
                            <span className="box" onClick={()=>handleClic(16)}>16</span>
                            <span className="box" onClick={()=>handleClic(17)}>17</span>
                            <span className="box" onClick={()=>handleClic(18)}>18</span>
                            <span className="box" onClick={()=>handleClic(19)}>19</span>
                            <span className="box" onClick={()=>handleClic(20)}>20</span>
                            <span className="box" onClick={()=>handleClic(21)}>21</span>
                            <span className="box" onClick={()=>handleClic(22)}>22</span>
                            <span className="box" onClick={()=>handleClic(23)}>23</span>
                            <span className="box" onClick={()=>handleClic(24)}>24</span>
                            <span className="box" onClick={()=>handleClic(25)}>25</span>
                            <span className="box" onClick={()=>handleClic(26)}>26</span>
                            <span className="box" onClick={()=>handleClic(27)}>27</span>
                            <span className="box" onClick={()=>handleClic(28)}>28</span>
                            <span className="box" onClick={()=>handleClic(29)}>29</span>
                            <span className="box" onClick={()=>handleClic(30)}>30</span>
                            <span className="box" onClick={()=>handleClic(31)}>31</span>
                            <span className="box" onClick={()=>handleClic(32)}>32</span>
                            <span className="box" onClick={()=>handleClic(33)}>33</span>
                            <span className="box" onClick={()=>handleClic(34)}>34</span>
                            <span className="box" onClick={()=>handleClic(35)}>35</span>
                            <span className="box" onClick={()=>handleClic(36)}>36</span>
                            <span className="box" onClick={()=>handleClic(37)}>37</span>
                            <span className="box" onClick={()=>handleClic(38)}>38</span>
                            <span className="box" onClick={()=>handleClic(39)}>39</span>
                            <span className="box" onClick={()=>handleClic(40)}>40</span>
                            <span className="box" onClick={()=>handleClic(41)}>41</span>
                            <span className="box" onClick={()=>handleClic(42)}>42</span>
                            <span className="box" onClick={()=>handleClic(43)}>43</span>
                            <span className="box" onClick={()=>handleClic(44)}>44</span>
                            <span className="box" onClick={()=>handleClic(45)}>45</span>
                            <span className="box" onClick={()=>handleClic(46)}>46</span>
                            <span className="box" onClick={()=>handleClic(47)}>47</span>
                            <span className="box" onClick={()=>handleClic(48)}>48</span>
                            <span className="box" onClick={()=>handleClic(49)}>49</span>
                            <span className="box" onClick={()=>handleClic(50)}>50</span>
                            <span className="box" onClick={()=>handleClic(51)}>51</span>
                            <span className="box" onClick={()=>handleClic(52)}>52</span>
                            <span className="box" onClick={()=>handleClic(53)}>53</span>
                            <span className="box" onClick={()=>handleClic(54)}>54</span>
                            <span className="box" onClick={()=>handleClic(55)}>55</span>
                            <span className="box" onClick={()=>handleClic(56)}>56</span>
                            <span className="box" onClick={()=>handleClic(57)}>57</span>
                            <span className="box" onClick={()=>handleClic(58)}>58</span>
                            <span className="box" onClick={()=>handleClic(59)}>59</span>
                            <span className="box" onClick={()=>handleClic(60)}>60</span>
                        </div>
                    </div>
                    <div className="bs-theory">
                        <h1 className="bs-theory-head">Binary Search</h1>
                        <div className="bs-theory-para">
                            Binary Search Algorithm can be implemented in two ways which are discussed below.
                            <ol>
                                <li className="bs-theory-para">Iterative Method</li>
                                <li className="bs-theory-para">Recursive Method</li>
                            </ol>
                        </div>
                        <p className="bs-theory-para">The recursive method follows the divide and conquer approach.</p>
                        <p className="bs-theory-para">The general steps for both methods are discussed below.
                        </p>
                        <div className="bs-theory-para bs-working">
                            <ol className="bs-theory-para">
                                <li>
                                    <p>The array in which searching is to be performed is:
                                    </p>
                                    <div className="bs-theory-para-img">
                                        <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-initial-array.png" alt="" />
                                        <p className="bs-theory-para-text">Initial array</p>
                                    </div>
                                </li>
                                <li>
                                    <p>Set two pointers low and high at the lowest and the highest positions respectively.
                                    </p>
                                    <div className="bs-theory-para-img">
                                        <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-set-pointers.png" alt="" />
                                        <p className="bs-theory-para-text">Setting pointers</p>
                                    </div>
                                </li>
                                <li>
                                    <p>Find the middle element mid of the array ie. arr[(low + high)/2] = 6.
                                    </p>
                                    <div className="bs-theory-para-img">
                                        <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid.png" alt="" />
                                        <p className="bs-theory-para-text">Mid element</p>
                                    </div>
                                </li>
                                <li>If x == mid, then return mid.Else, compare the element to be searched with m.</li>
                                <li>If x is greater than mid, compare x with the middle element of the elements on the right side of mid. This is done by
                                    setting low to low = mid + 1.</li>
                                <li>
                                    <p>Else, compare x with the middle element of the elements on the left side of mid. This is done by setting
                                        high to high = mid - 1.</p>
                                    <div className="bs-theory-para-img">
                                        <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-find-mid.png" alt="" />
                                        <p className="bs-theory-para-text">Finding mid element</p>
                                    </div>
                                </li>
                                <li>
                                    <p>Repeat steps 3 to 6 until low meets high.</p>
                                    <div className="bs-theory-para-img">
                                        <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-mid-again.png" alt="" />
                                        <p className="bs-theory-para-text">Mid element</p>
                                    </div>
                                </li>
                                <li>
                                    <p>x = 4 is found.</p>
                                    <div className="bs-theory-para-img">
                                        <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-search-found.png" alt="" />
                                        <p className="bs-theory-para-text">Found</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BinarySerch
