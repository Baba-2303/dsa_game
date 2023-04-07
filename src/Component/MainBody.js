import React from 'react';
import Slider from './Slider';
import Card1 from './Card1';

function MainBody() {
    let cardValue = [
        {
            'imageurl': 'images/news-img1.png',
            'title': 'Learn searching algorithms in DSA',
            'desc': 'Search refers to locating a desired element of specified properties in a collection of items. We are going to start our discussion using following commonly used and simple search algorithms. ...'
        },
        {
            'imageurl': 'images/news-img2.png',
            'title': 'Learn the implementation of stacks',
            'desc': 'Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out)....'
        },
        {
            'imageurl': 'images/news-img3.png',
            'title': 'Learn the implementation of queue',
            'desc': 'Queue is an abstract data structure, somewhat similar to Stacks. Unlike stacks, a queue is open at both its ends....'
        },
        {
            'imageurl': 'images/news-img4.png',
            'title': 'What is Binary Tree in DSA ?',
            'desc': 'The Binary tree means that the node can have maximum two children. Here, binary name itself suggests that "two"; therefore, ...'
        },
        {
            'imageurl': 'images/news-img5.png',
            'title': 'Differrnt Sorting Algorithms in DSA',
            'desc': 'A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure. ...'
        }
    ];
    return (
        <div>
            <Slider />
            <div class="mycontainer" id="mycon-index">
                <div class="main">
                    <div class="news-card-container">
                        {cardValue.map((element) => <Card1 imageurl={element.imageurl} title={element.title} desc={element.desc} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody
