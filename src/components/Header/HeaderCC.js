import {connect} from 'react-redux';
import { Header } from './Header';
const mapDispatchToState = (state) =>({
  titleList: state.itemListReduser.name
})
export const HeaderCC = connect(mapDispatchToState)(Header)