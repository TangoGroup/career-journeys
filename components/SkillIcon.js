/* eslint-disable import/extensions */
import styles from './SkillIcon.styles';
import alignmentSvg from '../assets/alignment.svg.js';
import collaborationSvg from '../assets/collaboration.svg.js';
import leadershipSvg from '../assets/leadership.svg.js';
import deliverySvg from '../assets/delivery.svg.js';
import technicalExcellenceSvg from '../assets/technical-excellence.svg.js';

const iconMap = {
  TECHNICAL_EXCELLENCE: technicalExcellenceSvg,
  ALIGNMENT: alignmentSvg,
  LEADERSHIP: leadershipSvg,
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
