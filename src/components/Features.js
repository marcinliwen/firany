import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section" 
        style={{
          position:'relative',
        }}> 
          <div className="has-text-centered" 
          style={{
            position:'absolute',
            width: '100%',
            top: '0px'
          }}> 
            <div
              style={{
                width: '200px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} isFeatures={true}/>
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
