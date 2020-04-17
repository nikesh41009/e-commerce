import React from "react";
import './menu.scss';
import Item from '../../components/item/item.jsx';
import {connect} from 'react-redux';
import {selectmenuSections} from '../../redux/directory/menu.selector';
import {createStructuredSelector} from 'reselect';
const  Menu =({lists}) =>
(
        <div className ="menu">
          {
            lists.map(({id,...other }) =>(
                <Item  key= {id} {...other }/>
              ))
          }
        </div>
      )
const mapStateToProps = createStructuredSelector({
  lists:selectmenuSections
})

export default connect (mapStateToProps)(Menu);