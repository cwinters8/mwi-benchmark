import React from 'react';
import PropTypes from 'prop-types';

import styles from './ArticleBlock.module.css';
import Button from './Button';

const ArticleBlock = ({image, imageAlt, heading, text, link, ...props}) => {
  const headerImage = image 
    ? <img alt={imageAlt} src={image} className={styles.image} />
    : <div className={styles.image} />

  const defaultText = [
    'This is a paragraph text that is meant to flex and wrap to',
    'a new line based on the number of characters in this container.',
    'Please make sure this is looking pretty based on the amount of',
    'characters this is taking up.'
  ].join(' ');

  const handleReadMore = () => {
    // for this use case, simply routing using href as if the link were external
    // if this were a real app, I would route using React Router's Redirect component
    if (link) window.location.href = link;
  }
  
  return (
    <div {...props} className={styles.block}>
      {headerImage}
      <h2>{heading || 'Heading 2'}</h2>
      <p title='Article Preview' className={styles.preview}>{text || defaultText}</p>
      <Button onClick={handleReadMore}>Read More</Button>
    </div>
  );
}

ArticleBlock.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
}

export default ArticleBlock;