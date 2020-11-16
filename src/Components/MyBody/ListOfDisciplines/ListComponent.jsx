
import { setListAC, getUserbyIdThunkCreator } from '../../../Redux/list-reduser';
import { ListOfDisciplines } from './ListClass';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


let maptoStateToProps = (state) => {
   console.log(state);
   return {
      ListOfDisciplinesPage: state.ListReduser.ListOfDisciplines
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      setList: (ListOfDisciplinesPage) => {
         dispatch(setListAC(ListOfDisciplinesPage));
      },
      getUserbyId: (id) => {
         dispatch(getUserbyIdThunkCreator(id));
      }
   }
}

let WithURL = withRouter(ListOfDisciplines);

export default connect(maptoStateToProps, mapDispatchToProps)(WithURL);


