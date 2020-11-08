
import { setDataAC, getTimetableThunkCreator } from '../../../Redux/timetable-reduser';
import { ListOfDisciplines } from './ListClass';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';


let maptoStateToProps = (state) => {

   return {
      timetable: state.timetableReduser.timetablePage.timetable,
      user: state.LoginReduser
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      setData: (data) => {
         dispatch(setDataAC(data));
      },
      getUser: () => {
         dispatch(getUserInfoThunkCreator());
      },
      getTimetable: (group, dateTime) => {
         dispatch(getTimetableThunkCreator(group, dateTime));
      }
   }
}
const ListComponent = connect(maptoStateToProps, mapDispatchToProps)(ListOfDisciplines);

export default ListComponent;