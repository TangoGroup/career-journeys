/* eslint-disable import/extensions */
import styles from './SkillIcon.styles';
import alignmentSvg from '../assets/alignment.svg.js';
import collaborationSvg from '../assets/collaboration.svg.js';
import cultureSvg from '../assets/culture.svg.js';
import deliverySvg from '../assets/delivery.svg.js';
import technicalExcellenceSvg from '../assets/technical-excellence.svg.js';

const iconMap = {
  TECHNICAL_EXCELLENCE: technicalExcellenceSvg,
  ALIGNMENT: alignmentSvg,
  CULTURE: cultureSvg,
  DELIVERY: deliverySvg,
  COLLABORATION: collaborationSvg,
};

const SkillIcon = (props) => {
  const { className, skillKey } = props;
  const icon = iconMap[skillKey];
  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <style jsx>{styles}</style>
    </div>
  );
};

export default SkillIcon;
