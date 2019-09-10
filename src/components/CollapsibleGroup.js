import React from 'react';
import PropTypes from 'prop-types';

import Collapsible from "./Collapsible";

const CollapsibleGroup = () => (
  <div className="panel-group">
    <Collapsible title="Overview">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officiis esse amet cumque et. Nihil fugit recusandae alias excepturi et, optio eligendi beatae inventore magnam atque quo dolore nam neque!
          </p>
    </Collapsible>
    <Collapsible title="Features">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officiis esse amet cumque et. Nihil fugit recusandae alias excepturi et, optio eligendi beatae inventore magnam atque quo dolore nam neque!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officiis esse amet cumque et. Nihil fugit recusandae alias excepturi et, optio eligendi beatae inventore magnam atque quo dolore nam neque!
            </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officiis esse amet cumque et. Nihil fugit recusandae alias excepturi et, optio eligendi beatae inventore magnam atque quo dolore nam neque!
            </p>
    </Collapsible>
    <Collapsible title="Software">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officiis esse amet cumque et. Nihil fugit recusandae alias excepturi et, optio eligendi beatae inventore magnam atque quo dolore nam neque!
          </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officiis esse amet cumque et. Nihil fugit recusandae alias excepturi et, optio eligendi beatae inventore magnam atque quo dolore nam neque!
          </p>
    </Collapsible>
  </div>
);

export default CollapsibleGroup
