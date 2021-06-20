import {connect} from 'react-redux';
import { Header } from './Header';
const mapDispatchToState = (state) =>({
  titleList: state.titleOfListReduser.title,
  titleColor: state.titleOfListReduser.color,
});
export const HeaderCC = connect(mapDispatchToState)(Header);