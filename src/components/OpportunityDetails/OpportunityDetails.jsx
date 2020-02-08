import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styles from './OpportunityDetails.module.scss';


export default function OpportunityDetails(props) {
  const {
    loading,
    data,
  } = props;

  return (
    <div className={styles.OpportunityDetails}>
      <div className="opportunityDescriptionArea">
        <img className="logo" src="https://s3.amazonaws.com/uifaces/faces/twitter/adityasutomo/128.jpg" />
        <div className="opportunityDetailsBody">
          <div className="opportunityDescription">
            <span className="descriptionText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed nisl nec purus mollis feugiat. Quisque augue velit, euismod eget malesuada id, gravida id velit. Cras lacinia risus quis tellus accumsan, vitae porta odio blandit. Nullam vel arcu ut ipsum egestas viverra. Nullam ipsum lacus, interdum sit amet sodales non, tincidunt vitae sem. Nunc lacinia tincidunt mauris, quis eleifend erat sodales nec. Maecenas quis sagittis nulla, nec auctor arcu.

  Maecenas sit amet enim sit amet nisi venenatis facilisis quis id dui. Vivamus non elementum leo, in interdum nunc. Pellentesque eget nunc ornare, rhoncus magna et, imperdiet felis. Curabitur consectetur lobortis nunc ut imperdiet. Suspendisse rhoncus sollicitudin libero, a dictum purus blandit a. Curabitur blandit libero ipsum, id vulputate sapien porttitor a. Curabitur vel massa eu eros tincidunt sagittis et at tortor.

  Cras efficitur at justo et semper. Donec sagittis rutrum sem vestibulum vehicula. Etiam sollicitudin felis quis metus lacinia mattis. Nunc at nulla quis erat pretium malesuada. Nulla feugiat tempus est, quis lacinia nunc ultrices ut. Duis sit amet purus justo. Morbi ac lorem ut tortor varius blandit. Nullam maximus, metus at molestie sagittis, augue dolor facilisis ex, in rhoncus ipsum augue nec est. Mauris scelerisque augue a enim egestas suscipit. Mauris non tristique felis, bibendum efficitur lectus. Phasellus vitae sem vel justo blandit sodales eget non magna. Praesent suscipit mollis lorem, eu posuere nunc aliquam in. Praesent id orci felis. Aenean facilisis quam vitae nunc venenatis, vel commodo libero ornare.
            </span>
            <button className="opportunityApplyButton">Cadastrar-se</button>
          </div>
          <div className="opportunityDetailsCard">
            <div className="attributeSession">
              <div className="attributeName">Tipo de trabalho</div>
              <div className="attributeValue">Full Time</div>
            </div>

            <div className="attributeSession">
              <div className="attributeName">Tipo de trabalho</div>
              <div className="attributeValue">Full Time</div>
            </div>

            <div className="attributeSession">
              <div className="attributeName">Tipo de trabalho</div>
              <div className="attributeValue">Full Time</div>
            </div>

            <div className="attributeSession">
              <div className="attributeName">Tipo de trabalho</div>
              <div className="attributeValue">Full Time</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

OpportunityDetails.defaultProps = {};
OpportunityDetails.propTypes = {};