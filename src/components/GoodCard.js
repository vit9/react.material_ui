import React, { useRef } from 'react';
import { Grid } from '@material-ui/core';
import EmptyHeart from './svgs/emptyHeart';
import FillHeart from './svgs/fillHeart';

export default function GoodCard() {
  const ref = useRef();

  const handleOver = () => {
    const elm = ref.current;
    elm?.classList.add('d-block');
  };

  const handleLeave = (event) => {
    if (event.relatedTarget.localName === 'main') {
      const elm = ref.current;
      elm?.classList.remove('d-block');
    }
  };

  return (
      <Grid item xs={3}>
        <div className="column" onMouseOver={handleOver} onMouseLeave={handleLeave}>
            <div className="post-module">
                <div className="thumbnail">
                    <div className="date" onClick={() => console.log('heart')}>
                        <EmptyHeart/>
                        </div>
                        <div >
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg"/>
                        </div>
                  </div>
                <div className="post-content">
                    <div className="category">Photos</div>
                    <h1 className="title">City Lights in New York</h1>
                    <h2 className="sub_title">The city that never sleeps.</h2>
                    <p className="description" ref={ref}>New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
                    <div className="post-meta"><span className="timestamp"><i className="fa fa-clock-">o</i> 6 mins ago</span><span className="comments"><i className="fa fa-comments"></i><a href="#"> 39 comments</a></span></div>
                </div>
            </div>
        </div>
      </Grid>
  );
}
