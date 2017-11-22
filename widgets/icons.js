// import React from 'react';
// import Icon from './Icon.jsx';
// import {icons} from '../theme';

// export default props => (
//   <div>
//     <button onClick={() => props.shareVia('faceboook')}>
//       <Icon icon={ICONS.FACEBOOK} />
//     </button>
//     <button onClick={() => props.shareVia('twitter')}>
//       <Icon icon={ICONS.TWITTER} />
//     </button>
//   </div>
// );


import React from 'react';
const {PropTypes} = React;

const Icon = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
};

export default Icon;