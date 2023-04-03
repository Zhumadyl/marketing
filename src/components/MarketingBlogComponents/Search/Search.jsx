import React from "react";
import css from './Search.module.css'
import { SearchConst } from '../../../Constants/SearchConst';
import Card from '../Card/Card';
import post1 from '../../../assets/post1.svg'
import post2 from '../../../assets/post2.svg'
import post3 from '../../../assets/post3.svg'
import post4 from '../../../assets/post4.svg'
import adv from '../../../images/adv.svg'


function Search(props) {
  return (
    <div className='container'>
      <div className={css.wrapper}>
      <div className={css.left}>
          {
            SearchConst.map((item) => <Card key={item.id} {...item} />)
          }
      </div>

        <div className={css.sideBar}>
          <input type="text" placeholder='Search...' />
          <div className={css.categories}>
            <h1 className={css.title}>Categories</h1>
            <ul>
              <li>Marketing</li>
              <li>Development</li>
              <li>Marketing</li>
              <li>Marketing</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div className={css.recentPosts}>
            <h1 className={css.title}>Recent Posts</h1>
            <div className={css.post}>
              <img src={post1} alt="" />
              <div className={css.txt}>
                <h1 className={css.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={css.time}>November 7, 2017 8 min read</p>
              </div>
            </div>
            <div className={css.post}>
              <img src={post2} alt="" />
              <div className={css.txt}>
                <h1 className={css.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={css.time}>November 7, 2017 8 min read</p>
              </div>
            </div>
            <div className={css.post}>
              <img src={post3} alt="" />
              <div className={css.txt}>
                <h1 className={css.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={css.time}>November 7, 2017 8 min read</p>
              </div>
            </div>
            <div className={css.post}>
              <img src={post4} alt="" />
              <div className={css.txt}>
                <h1 className={css.post_text}>Understanding color theory: the <br /> color wheel and finding...</h1>
                <p className={css.time}>November 7, 2017 8 min read</p>
              </div>
            </div>

          </div>
          <div className={css.popolarTags}>
            <h1 className={css.title}>Popular Tags</h1>
            <div className={css.tags}>
              <div>
              <button >Marketing</button>
                <button>Development</button>
                <button>HR & Recruting</button> 
              </div>
              <div>
              <button>HR  Recruting</button>
                <button>Design</button>
                <button>Management</button>
              </div>
              <div>
              <button>Business</button>
                <button>Community</button>
                <button>Tutorials</button>
              </div>
            </div>

          </div>

          <div className={css.adv}>
            <img src={adv} alt="" />
            <div className={css.center}>
              <div className={css.disc}>
                <h1>Advertisement</h1>
                <p>Duis leo. Donec orci lectus, aliquam <br />
                  ut, faucibus non</p>
              </div>
              <button className={css.orangeBtn}>Go Now</button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Search;

