import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import parse from 'html-react-parser'
import ReactBnbGallery from 'react-bnb-gallery'
import _ from 'lodash'

import Thumbnail from '../../UI/Thumbnail'
import Content from '../../UI/Content'
import aboutData from '../../../data/About/home-one'

const getRandomInt = (width, distance) => Number(Math.random() * width + distance).toFixed(0)

const photos = _.range(1, 40).map(i => ({photo: `https://picsum.photos/id/${i}/${getRandomInt(600, 800)}/${getRandomInt(400, 600)}`}))

const About = () => {
  const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="about-area-wrapper sm-top">
          <div className="container">
              <div className="row align-items-lg-center">
                  <div className="col-md-6 col-lg-4">
                      <Thumbnail classes="about-thumb" imgSrc={require('../../../assets/img' + aboutData.thumb)}/>
                  </div>

                  <div className="col-md-6 col-lg-4">
                      <Content classes="about-content">
                          <h6>{aboutData.title}</h6>
                          <h2>{parse(aboutData.heading)}</h2>
                          <span className="about-since">{aboutData.since}</span>
                          <p>{parse(aboutData.text)}</p>
                          <Link to={`${process.env.PUBLIC_URL + aboutData.btnLink}`} className="btn-about">{aboutData.btnText} <i className="fa fa-angle-double-right"/></Link>
                      </Content>
                  </div>

                  <div>
                      <button onClick={() => setIsOpen(true)}>
                          Open gallery
                      </button>
                      <ReactBnbGallery
                        show={isOpen}
                        photos={photos}
                        onClose={() => setIsOpen(false)}
                      />
                  </div>
              </div>
          </div>
      </div>
    )
}

export default About